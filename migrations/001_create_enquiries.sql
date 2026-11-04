-- ==============================================================================
-- QUBIZON DIGITAL SOLUTIONS — PRODUCTION DATABASE SCHEMA MIGRATION
-- Migration: 001_create_enquiries.sql
-- Target Engine: PostgreSQL 15+
-- Safe Execution: Completely non-destructive (uses IF NOT EXISTS).
-- Rollback Instructions: See migrations/001_rollback_enquiries.sql
-- ==============================================================================

-- 1. Enquiries Table (Confidential Client Enquiries & Durable Outbox State)
CREATE TABLE IF NOT EXISTS enquiries (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    reference_id VARCHAR(32) NOT NULL UNIQUE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    -- Step 1: Project Overview
    service VARCHAR(50) NOT NULL,
    project_name VARCHAR(150),
    project_summary VARCHAR(2000) NOT NULL,
    website_url VARCHAR(255),

    -- Step 2: Contact Details
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    company_name VARCHAR(150),
    budget VARCHAR(50),
    timeframe VARCHAR(50),

    -- Privacy & Compliance Audit
    privacy_acknowledged BOOLEAN NOT NULL DEFAULT TRUE,
    privacy_acknowledged_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    -- Decoupled Notification Outbox Tracking
    notification_status VARCHAR(20) NOT NULL DEFAULT 'pending', -- 'pending' | 'sent' | 'failed'
    notification_attempts INT NOT NULL DEFAULT 0,
    notification_last_attempt TIMESTAMPTZ,
    notification_next_attempt TIMESTAMPTZ,
    notification_error TEXT,
    notification_error_category VARCHAR(50), -- 'network_timeout' | 'provider_auth' | 'rate_limit' | 'unknown'

    -- Internal Workflow State
    processing_status VARCHAR(20) NOT NULL DEFAULT 'new', -- 'new' | 'contacted' | 'archived'

    -- Privacy-Preserving Rate Limit & Abuse Hash
    client_ip_hash VARCHAR(64)
);

-- Performance & Query Isolation Indexes
CREATE INDEX IF NOT EXISTS idx_enquiries_created_at ON enquiries(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_enquiries_email ON enquiries(email);
CREATE INDEX IF NOT EXISTS idx_enquiries_duplicate_check ON enquiries(email, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_enquiries_outbox_queue ON enquiries(notification_status, notification_next_attempt) 
    WHERE notification_status IN ('pending', 'failed');
CREATE INDEX IF NOT EXISTS idx_enquiries_processing_status ON enquiries(processing_status);

-- 2. Rate Limits Table (Sliding Window / Rate Protection)
CREATE TABLE IF NOT EXISTS enquiry_rate_limits (
    ip_hash VARCHAR(64) PRIMARY KEY,
    request_count INT NOT NULL DEFAULT 1,
    window_start TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_request_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_rate_limits_window ON enquiry_rate_limits(window_start);

-- 3. Automatic updated_at trigger
CREATE OR REPLACE FUNCTION update_enquiries_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trigger_enquiries_updated_at ON enquiries;
CREATE TRIGGER trigger_enquiries_updated_at
    BEFORE UPDATE ON enquiries
    FOR EACH ROW
    EXECUTE FUNCTION update_enquiries_updated_at();

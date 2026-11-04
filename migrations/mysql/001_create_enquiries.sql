-- ==============================================================================
-- QUBIZON DIGITAL SOLUTIONS — MARIADB 10.4.32 DATABASE SCHEMA MIGRATION
-- Migration: migrations/mysql/001_create_enquiries.sql
-- Target Engine: MariaDB 10.4.32 / MySQL 8.0+
-- Database: qubizon
-- Character Set: utf8mb4 / utf8mb4_unicode_ci
-- Safe Execution: Completely non-destructive (uses IF NOT EXISTS).
-- Rollback Instructions: See migrations/mysql/001_rollback_enquiries.sql
-- ==============================================================================

-- 1. Enquiries Table (Confidential Client Enquiries & Durable Outbox State)
CREATE TABLE IF NOT EXISTS enquiries (
    id CHAR(36) NOT NULL,
    reference_id VARCHAR(32) NOT NULL,
    dedup_window_key VARCHAR(64) NULL,
    created_at DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    updated_at DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),

    -- Step 1: Project Overview
    service VARCHAR(50) NOT NULL,
    project_name VARCHAR(150) NULL,
    project_summary VARCHAR(2000) NOT NULL,
    website_url VARCHAR(255) NULL,

    -- Step 2: Contact Details
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NULL,
    company_name VARCHAR(150) NULL,
    budget VARCHAR(50) NULL,
    timeframe VARCHAR(50) NULL,

    -- Privacy & Compliance Audit
    privacy_acknowledged TINYINT(1) NOT NULL DEFAULT 1,
    privacy_acknowledged_at DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),

    -- Decoupled Notification Outbox Tracking
    notification_status VARCHAR(20) NOT NULL DEFAULT 'pending', -- 'pending' | 'sent' | 'failed'
    notification_attempts INT NOT NULL DEFAULT 0,
    notification_last_attempt DATETIME(6) NULL,
    notification_next_attempt DATETIME(6) NULL,
    notification_error TEXT NULL,
    notification_error_category VARCHAR(50) NULL, -- 'network_timeout' | 'provider_auth' | 'rate_limit' | 'provider_error'

    -- Internal Workflow State
    processing_status VARCHAR(20) NOT NULL DEFAULT 'new', -- 'new' | 'contacted' | 'archived'

    -- Privacy-Preserving Rate Limit & Abuse Hash
    client_ip_hash VARCHAR(64) NULL,

    -- Primary & Unique Constraints
    PRIMARY KEY (id),
    UNIQUE KEY uq_enquiries_reference_id (reference_id),
    UNIQUE KEY uq_enquiries_dedup_window (dedup_window_key),

    -- Check Constraints (Natively enforced in MariaDB 10.2.1+)
    CONSTRAINT chk_enquiries_service CHECK (service IN ('web-development', 'seo', 'social-media-marketing', 'paid-advertising', 'content-marketing')),
    CONSTRAINT chk_enquiries_notification_status CHECK (notification_status IN ('pending', 'sent', 'failed')),
    CONSTRAINT chk_enquiries_processing_status CHECK (processing_status IN ('new', 'contacted', 'archived')),

    -- Performance & Worker Polling Indexes
    INDEX idx_enquiries_created_at (created_at DESC),
    INDEX idx_enquiries_email (email),
    INDEX idx_enquiries_dup_check (email, created_at DESC),
    INDEX idx_enquiries_outbox_queue (notification_status, notification_next_attempt),
    INDEX idx_enquiries_processing_status (processing_status),
    INDEX idx_enquiries_ip_hash (client_ip_hash)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 2. Enquiry Rate Limits Table (Sliding Window / Brute-Force Rate Protection)
CREATE TABLE IF NOT EXISTS enquiry_rate_limits (
    ip_hash VARCHAR(64) NOT NULL,
    request_count INT NOT NULL DEFAULT 1,
    window_start DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    last_request_at DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),

    PRIMARY KEY (ip_hash),
    INDEX idx_rate_limits_window (window_start)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

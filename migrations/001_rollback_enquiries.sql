-- ==============================================================================
-- QUBIZON DIGITAL SOLUTIONS — ROLLBACK MIGRATION
-- Migration: 001_rollback_enquiries.sql
-- Description: Reverses 001_create_enquiries.sql.
-- WARNING: Executing this will drop the enquiries and enquiry_rate_limits tables.
-- DO NOT EXECUTE ON PRODUCTION WITHOUT VERIFIED BACKUPS.
-- ==============================================================================

DROP TRIGGER IF EXISTS trigger_enquiries_updated_at ON enquiries;
DROP FUNCTION IF EXISTS update_enquiries_updated_at();

DROP TABLE IF EXISTS enquiry_rate_limits;
DROP TABLE IF EXISTS enquiries;

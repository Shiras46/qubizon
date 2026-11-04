-- ==============================================================================
-- QUBIZON DIGITAL SOLUTIONS — MARIADB 10.4.32 SCHEMA ROLLBACK SCRIPT
-- Script: migrations/mysql/001_rollback_enquiries.sql
-- Database: qubizon
-- WARNING: Executing this script drops the enquiries and rate-limit tables and all stored data.
-- Intended strictly for test teardown or complete schema re-creation.
-- NEVER execute against production without explicit data backup.
-- ==============================================================================

DROP TABLE IF EXISTS enquiry_rate_limits;
DROP TABLE IF EXISTS enquiries;

-- PostgreSQL Schema for BloodConnect

-- Optional: Run these creations manually if database does not exist
-- CREATE DATABASE bloodconnect;
-- \c bloodconnect;

CREATE TABLE IF NOT EXISTS emergency_requests (
    id SERIAL PRIMARY KEY,
    patient_name VARCHAR(100) NOT NULL,
    blood_group VARCHAR(5) NOT NULL,
    hospital_location VARCHAR(200) NOT NULL,
    urgency VARCHAR(20) NOT NULL,
    units_required INTEGER NOT NULL,
    contact_number VARCHAR(20) NOT NULL,
    additional_notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS donors (
    id SERIAL PRIMARY KEY,
    donor_name VARCHAR(100) NOT NULL,
    blood_group VARCHAR(5) NOT NULL,
    city VARCHAR(100) NOT NULL,
    contact_number VARCHAR(20) NOT NULL,
    registered_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

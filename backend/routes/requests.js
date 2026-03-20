const express = require('express');
const router = express.Router();
const db = require('../db');

// @route   GET /api/requests
// @desc    Get all emergency requests
router.get('/', async (req, res) => {
  try {
    const { rows } = await db.query('SELECT * FROM emergency_requests ORDER BY created_at DESC');
    res.json(rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Server error fetching requests' });
  }
});

// @route   POST /api/requests
// @desc    Create an emergency request
router.post('/', async (req, res) => {
  const { patient_name, blood_group, hospital_location, urgency, units_required, contact_number, additional_notes } = req.body;
  try {
    const result = await db.query(
      `INSERT INTO emergency_requests 
       (patient_name, blood_group, hospital_location, urgency, units_required, contact_number, additional_notes) 
       VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
      [patient_name, blood_group, hospital_location, urgency || 'critical', units_required, contact_number, additional_notes]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Server error creating request' });
  }
});

module.exports = router;

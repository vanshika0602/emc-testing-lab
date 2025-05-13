const express = require('express');
const router = express.Router();
const labController = require('../controllers/labController'); // Adjust path as needed

// Create a new lab
router.post('/create', labController.createLab);

// Get all labs
router.get('/list', labController.getAllLabs);

// You can also add other routes like get by ID, update, delete in future

module.exports = router;

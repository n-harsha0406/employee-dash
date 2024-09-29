const express = require('express');
const router = express.Router();

let employees = []; // In-memory storage (for simplicity)

router.get('/', (req, res) => {
  res.json(employees);
});

router.post('/', (req, res) => {
  const newEmployee = { id: employees.length + 1, ...req.body };
  employees.push(newEmployee);
  res.status(201).json(newEmployee);
});

// Add more routes (PUT, DELETE) as necessary

module.exports = router;

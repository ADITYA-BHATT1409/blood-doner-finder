const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Basic Route
app.get('/', (req, res) => {
  res.send('BloodConnect API is running...');
});

// Import Routes
const requestsRoutes = require('./routes/requests');
app.use('/api/requests', requestsRoutes);

// Start Server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

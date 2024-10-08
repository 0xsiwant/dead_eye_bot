// Import required modules
const express = require('express');
const cors = require('cors');
const connectDb = require('./config/db');
const userRoutes = require('./Router/userRoutes');
const { PORT, FRONTEND_PATH } = require('./config/index');


const app = express();
app.use(express.json());

// Middleware
app.use(cors({
  origin: 'https://saranfilm.com'
}));

// Database Connection
connectDb();


// Routes
app.use('/', userRoutes);

// Test API
app.get('/', (req, res) => {
  res.send('Backend is running');
});

// Start express server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Install cors using: npm install cors
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 8080;

// Enable CORS
app.use(cors());

// Sample endpoint for user registration
app.post('/api/auth/signup', (req, res) => {
  // Handle user registration logic here
  // Access request body data using: req.body

  // Respond with a success message
  res.json({ message: 'User registered successfully' });
});

// Sample endpoint for user login
app.post('/api/auth/signin', (req, res) => {
    // Handle user login logic here
    // Access request body data using: req.body
  
    // Respond with a success message or error message
    res.json({ message: 'User logged in successfully' });
  });
  

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});  
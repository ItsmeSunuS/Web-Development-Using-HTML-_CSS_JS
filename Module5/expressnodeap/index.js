console.log("INDEX.JS FILE IS RUNNING");

const express = require('express');
const app = express();
const PORT = 4000;

// Root route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Express server' });
});

// Home route
app.get('/home', (req, res) => {
  res.json({ message: 'This is home page' });
});

// Contact Us route
app.get('/contactus', (req, res) => {
  res.json({ message: 'Contact us at contact@contact.com' });
});

// About route (bonus)
app.get('/about', (req, res) => {
  res.json({ message: 'Welcome to the About page!' });
});

// START SERVER 
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

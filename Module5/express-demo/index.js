const express = require('express');
const os = require('os');
const dns = require('dns');
const readFileData = require('./read');

const app = express();
const PORT = 3000;

// Routes

// Test route
app.get('/test', (req, res) => {
  res.send('Test route is working!');
});

// Read file route
app.get('/readfile', (req, res) => {
  try {
    const data = readFileData();
    res.send(data);
  } catch (error) {
    res.status(500).send('Error reading the file');
  }
});

// System details route
app.get('/systemdetails', (req, res) => {
  res.json({
    platform: os.platform(),
    totalMemory: (os.totalmem() / (1024 ** 3)).toFixed(2) + ' GB',
    freeMemory: (os.freemem() / (1024 ** 3)).toFixed(2) + ' GB',
    cpuModel: os.cpus()[0].model,
    cpuCores: os.cpus().length
  });
});

// Get IP route
app.get('/getip', (req, res) => {
  dns.lookup('masaischool.com', { all: true }, (err, addresses) => {
    if (err) {
      return res.status(500).send('DNS lookup failed');
    }
    res.json({
      hostname: 'masaischool.com',
      addresses
    });
  });
});

//   Server Start
app.get('/', (req, res) => {
  res.send('Express server is running');
});


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

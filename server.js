// server.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000; 

// Middleware
app.use(cors()); 
app.use(bodyParser.json()); 

app.post('/api/location', (req, res) => {
  const { currentLat, currentLon, latitude, longitude, distance, isArrive } = req.body;

  console.log('Received data:', {
    currentLat,
    currentLon,
    latitude,
    longitude,
    distance,
    isArrive
  });

  // Lakukan sesuatu dengan data, seperti menyimpannya ke database atau mengirimnya ke dashboard

  res.json({ message: 'Data received successfully!' });
});

// Jalankan server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

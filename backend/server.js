const express = require('express');
const cors = require('cors');
const { query } = require('./db'); // Import query function from db.js

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS for all origins
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
}));

app.use(express.json());

// Simple API endpoint that returns the message "Hello Traders!"
app.get('/hello', async (req, res) => {
  try {
    // Query the database to get the message
    const result = await query('SELECT content FROM messages WHERE id = $1', [1]);
    const message = result.rows[0] ? result.rows[0].content : 'Hello Traders!';

    res.json({ message: message });
  } catch (error) {
    console.error('Error fetching message:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

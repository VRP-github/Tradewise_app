const express = require('express');
const cors = require('cors');
const { query } = require('./db'); 
const bcrypt = require('bcrypt');
const { Pool } = require('pg');

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



app.use(express.urlencoded({ extented: false}));

app.post('/users/register', async (req, res) => {
  let { name, username, email, password } = req.body;

  let errors = [];

  if (!name || !email || !username || !password) {
    errors.push({ message: "Please enter all fields" });
    return res.status(400).json({ errors });
  }

  try {
    let hashedPassword = await bcrypt.hash(password, 10);
    // console.log(hashedPassword);

    // Execute the SELECT query
    query(
      `SELECT * FROM users WHERE email = $1`,
      [email],
      (err, results) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ message: "Database error" });
        }

        console.log("Reached here");
        console.log(results.rows); // Accessing the rows returned from the query

        if (results.rows.length > 0) {
          return res.status(400).json({ message: "Email already exists" });
        }

        // If email doesn't exist, proceed with user registration
        query(
          `INSERT INTO users (name, username, email, password) VALUES ($1, $2, $3, $4)`,
          [name, username, email, hashedPassword],
          (err, results) => {
            if (err) {
              console.error(err);
              return res.status(500).json({ message: "Error during registration" });
            }
            return res.status(201).json({ message: "User registered successfully" });
          }
        );
      }
    );
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
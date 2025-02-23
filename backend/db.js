const { Pool } = require('pg'); 
require('dotenv').config();

const isProduction = process.env.NODE_ENV ==="production";
// PostgreSQL connection setup
const pool = new Pool({
  user: process.env.DB_USER,        // Replace with your PostgreSQL username
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME,    // Replace with your database name
  password: process.env.DB_PASSWORD, // Replace with your PostgreSQL password
  port: process.env.DB_PORT || 5432,
});

// Function to query the database
const query = (text, params) => pool.query(text, params);

module.exports = { query }; // Export the query function for reuse

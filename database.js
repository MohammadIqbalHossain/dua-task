const sqlite3 = require('sqlite3').verbose();

// Connect to SQLite database (replace 'your_database_file.sqlite' with your .sqlite file)
const db = new sqlite3.Database('./db/dua_main.sqlite', (err) => {
    if (err) {
      console.error('Error connecting to SQLite database:', err.message);
    } else {
      console.log('Connected to the SQLite database.');
    }
  });
  
  module.exports = db
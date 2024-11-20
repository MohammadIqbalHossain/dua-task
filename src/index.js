const express = require('express');
const app = express();
const db = require('./database');
const port = process.env.PORT || 5000;

const cors = require('cors');
app.use(cors());

app.get('/api/data', (req, res) => {
    db.all('SELECT * FROM "dua" LIMIT 0,10', (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json(rows);
      }
    });
  });

  app.get('/api/category', (req, res) => {
    db.all('SELECT * FROM category LIMIT 0,5', (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json(rows);
      }
    });
  });

  app.get('/api/subCategory', (req, res) => {
    db.all('SELECT * FROM sub_category LIMIT 0,5', (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json(rows);
      }
    });
  });

app.get("/", (req, res) => {
    res.send("Running The server");
})


app.listen(port , (req, res)=>{
    
    console.log("server started", port);
})
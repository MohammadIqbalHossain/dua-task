const express = require('express');
const app = express();
const db = require('./database');

const cors = require('cors');
app.use(cors());

app.get('/api/data', (req, res) => {
    db.all('SELECT * FROM "dua" LIMIT 0,20', (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json(rows);
      }
    });
  });

  app.get('/api/category', (req, res) => {
    db.all('SELECT * FROM category', (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json(rows);
      }
    });
  });

  app.get('/api/subCategory', (req, res) => {
    db.all('SELECT * FROM sub_category', (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json(rows);
      }
    });
  });


app.listen(4000 , (req, res)=>{
    
    console.log("server started");
})
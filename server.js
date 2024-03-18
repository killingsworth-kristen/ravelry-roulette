require("dotenv").config();

const express = require('express');
const path = require('path');

const app = express();
const PORT = 3001;

console.log(process.env.RAV_USER, process.env.RAV_PASSWORD);

app.use(express.static('public'));

app.get('/', (req, res) => res.send('Navigate to /send or /routes'));

app.get('/about', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/about.html'))
);

app.get('/history', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/history.html'))
);

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);

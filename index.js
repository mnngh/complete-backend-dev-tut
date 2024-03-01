require('dotenv').config();

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/twitter', (req, res) => {
  res.send('mnndotcom');
});

app.get('/login', (req, res) => {
  res.send(`<h1>Please login at chai aur code</h1>`);
});

app.get('/mnn', (req, res) => {
  res.send('hello mr nur');
});

app.listen(process.env.PORT, () => {
  console.log(`Example app is listening on port ${port}`);
});

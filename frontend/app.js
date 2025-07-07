const express = require('express');
const app = express();
app.set('view engine', 'ejs');

const URL = process.env.BACKEND_URL || 'http://localhost:8000/api';

// Support for node-fetch in ES module format
const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));

// Route
app.get('/', async function (req, res) {
  const options = { method: "GET" };

  try {
    let response = await fetch(URL, options);
    let data = await response.json(); // the response from backend

    // Send this data to index.ejs
    res.render('index', { data: data.data }); // assuming data = { data: [...] }
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(3000, function () {
  console.log('Frontend listening on port 3000');
});

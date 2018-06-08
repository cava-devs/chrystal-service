const port = 3002;
const bodyParser = require('body-parser');
const db = require('../../database/index.js');
const path = require('path');
const express = require('express');
const app = express();

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname + '../../../client')));

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname + '../../../index.html'));
// });

app.get('/reviews', (req, res) => {
  db.getAllReviews();
  res.status(200).send('Successfully sent back a response to the get request!');
});

app.listen(port, () => console.log(`CavaTable is listening on port ${port}`));
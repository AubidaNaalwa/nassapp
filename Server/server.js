const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const api = require('./Routes/Api');
const path = require('path');
require('dotenv').config();

const PORT = 4000;
const app = express();

mongoose.connect('mongodb://localhost/nassap', { useNewUrlParser: true });

app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', api);

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});

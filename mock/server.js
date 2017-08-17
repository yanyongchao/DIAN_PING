const express = require('express');
const app = express();
app.listen(5000);
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

const ad = require('./home/ad.js');
const list = require('./home/list');
const info = require('./detail/info');
const comment = require('./detail/comment');

app.get('/api/ad', (req, res, next) => {
  res.send(ad);
});

app.get('/api/list/:city/:page', (req, res, next) => {
  res.send(list);
});

app.get('/api/detail/info/:id', (req, res, next) => {
  res.send(info);
});

app.get('/api/detail/commit/:id/:page', (req, res, next) => {
  res.send(comment);
});
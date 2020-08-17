const express = require('express');
const router = express.Router();
const Favorite = require('../Models/Favorite');

//*****REMOVE BEFORE PUBLISHING!*****************//
router.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization, Content-Length, X-Requested-With'
  );
  next();
});
//***********************************************//

router.get('/favorites', (req, res) => {
  Favorite.find({}).exec((err, data) => res.send(data));
});

router.post('/favorites', (req, res) => {
  const favorite = req.body;
  const newFavorite = new Favorite({
    favorite,
  });
  newFavorite.save().then((t) => res.send(t));
});

router.delete('/favorites/:id', (req, res) => {
  const id = req.params.id;
  Favorite.findByIdAndRemove(id).exec((err, data) => {
    ////
  });
});

module.exports = router;

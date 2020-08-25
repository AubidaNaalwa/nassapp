const express = require('express');
const router = express.Router();
const axios = require('axios');
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

const alterSearch = [
  {
    nasaId: 0,
    title: 'No images found',
    date: '',
    description: 'Alf',
    img:
      'https://cms.qz.com/wp-content/uploads/2018/08/alf-warner-bros-e1533220615626.jpg',
  },
];

router.get('/search/:searchField', (req, res) => {
  const { searchField } = req.params;
  axios(
    `https://images-api.nasa.gov/search?q=${searchField}&media_type=image`
  ).then((response) => {
    const data = response.data.collection.items.map((i) => ({
      nasaId: i.data[0].nasa_id,
      title: i.data[0].title,
      date: i.data[0].date_created,
      description: i.data[0].description,
      img: i.links[0].href,
    }));
    res.send(data.length ? data : alterSearch);
  });
});

router.get('/pod', (req, res) => {
  axios(
    `https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}`
  ).then((response) => {
    const data = {
      id: 'big',
      title: response.data.title,
      date: response.data.date,
      description: response.data.explanation,
      img: response.data.url,
    };
    res.send(data);
  });
});

router.get('/favorites', (req, res) => {
  Favorite.find({}).exec((err, data) => (err ? res.send(err) : res.send(data)));
});

router.post('/favorites', (req, res) => {
  const newFavorite = new Favorite({
    ...req.body,
    isFavorite: true,
  });
  newFavorite
    .save()
    .then((err, favorite) => (err ? res.send(err) : res.send(favorite)));
});

router.delete('/favorites/:id', (req, res) => {
  const { id } = req.params;
  Favorite.findByIdAndDelete(id, (err) =>
    err ? res.send(err) : res.send('Successful deletion')
  );
});

module.exports = router;

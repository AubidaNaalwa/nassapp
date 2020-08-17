const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const favoriteSchema = new Schema({
  nasaId: String,
  title: String,
  date: String,
  description: String,
  img: String,
});

const Favorite = mongoose.model('favorite', favoriteSchema);

module.exports = Favorite;

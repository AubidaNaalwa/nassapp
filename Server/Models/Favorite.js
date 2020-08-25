const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const favoriteSchema = new Schema({
  title: String,
  date: String,
  description: String,
  img: String,
  isFavorite: Boolean,
});

const Favorite = mongoose.model('favorite', favoriteSchema);

module.exports = Favorite;

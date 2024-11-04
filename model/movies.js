const mongoose = require('mongoose');

const moviesSchema = new mongoose.Schema({
    overview: String,
    popularity: Number,
    genre: String,
    name: String
});

const Movies = mongoose.model("Movies", moviesSchema);

module.exports = Movies;
const mongoose = require('mongoose');

// Movie schema 
const movieSchema = mongoose.Schema({
    movie_name: {type: String}, 
    director_name: {type: String},
    year: { type: String},
    IMDB_rating: { type: String},
});

// Define and export
module.exports = mongoose.model('Movie', movieSchema);

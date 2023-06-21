const { db } = require('./models/movie');

// connect to db
require('./db/connections'); 

// Import model 
const Movie = require('./models/movie');

// Add Movie

const addMovie = (movie) => {
    Movie.create(movie).then(movie => {
        console.info('New Movie Added');
        db.close();
    });
}

// Find Movie

const findMovie = (name) => {
    // Make case insensitive 
    const search = new RegExp(name, 'i'); 
    Movie.find({$or: [{movie_name: search}, {director_name: search}]})
    .then(movie => {
        console.info(movie);
        console.info(`${movie.length} matches`);
        db.close();
    });
}

// Update Movie
const updateMovie = (_id, movie ) => {
    Movie.update({ _id }, movie)
        .then(movie => {
            console.info('Movie Update');
            db.close();
        });
}

// Remove Movie
const removeMovie = (_id ) => {
    Movie.remove({ _id })
        .then(movie => {
            console.info('Movie Removed');
            db.close();
        });
}

// List Movies
const listMovies = () => {
    Movie.find()
    .then(movies => {
        console.info(movies);
        console.info(`${movies.length} movies`);
        db.close();
    });
}

// Export All Methods 
module.exports = {
    addMovie,
    findMovie, 
    updateMovie, 
    removeMovie, 
    listMovies
}
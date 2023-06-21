const { program } = require('commander');
const { prompt } = require('inquirer'); 
const {
    addMovie,
    findMovie, 
    updateMovie, 
    removeMovie, 
    listMovies
} = require('./index');

// Movie Questions 
const questions = [
    {
        type: 'input',
        name:'movie_name',
        message: 'Movie Name'
    },
    {
        type: 'input',
        name:'director_name',
        message: 'Director Name'
    },
    {
        type: 'input',
        name:'year',
        message: 'Movie Year'
    },
    {
        type: 'input',
        name:'IMDB_rating',
        message: 'IMDB Rating'
    }
];
program
    .version('1.0.0')
    .description('Client Management System')


// program
//     .command('add <firstname> <lastname> <phone> <email>')
//     .alias('a')
//     .description('Add a customer')
//     .action((firstname, lastname, phone, email) => {
//         addCustomer({firstname, lastname, phone, email});
//     });


// Add Command
program 
    .command('add')
    .alias('a')
    .description('Add a movie')
    .action(() => {
        prompt(questions).then(answers => addMovie(answers));
    });

// Find Command
program
    .command('find <name>')
    .alias('f')
    .description('Find a movie')
    .action(name => findMovie(name));


// Update Command
program 
    .command('update <_id>')
    .alias('u')
    .description('Update a movie')
    .action((_id) => {
        prompt(questions).then(answers => updateMovie(_id, answers));
    });

// Remove Command
program
    .command('remove <_id>')
    .alias('r')
    .description('Remove a movie')
    .action(_id => removeMovie(_id));

// List Command
program
    .command('list')
    .alias('l')
    .description('List all movies')
    .action(() => listMovies());

program.parse(process.argv);


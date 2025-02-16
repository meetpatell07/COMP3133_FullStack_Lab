const { Query } = require('mongoose');
const Movie = require('../models/Movie');

const resolvers = {
    Query: {
        movies: async () => await Movie.find(),
        movieById: async (_, { id }) => await Movie.findById(id),
    },
    Mutation: {
        addMovie: async (_, args) => {
            const movie = new Movie(args);
            return await movie.save();
        },
        
        updateMovie: async (_, { id, ...updates }) => {
            return await Movie.findByIdAndUpdate(id, updates, { new: true });
          },

        deleteMovie: async (_, { id }) => {
            await Movie.findByIdAndDelete(id);
            return "Movie deleted successfully"
        },
    }
};

module.exports = resolvers;
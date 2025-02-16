const { gql } = require('apollo-server-express');

const schema = gql`
  type Movie {
    _id: ID!
    name: String!
    director_name: String!
    production_house: String!
    release_date: String!
    rating: Float!
  }

  type Query {
    movies: [Movie]
    movieById(id: ID!): Movie
  }

  type Mutation {
    addMovie(
      name: String!,
      director_name: String!,
      production_house: String!,
      release_date: String!,
      rating: Float!
    ): Movie

    updateMovie(
      id: ID!,
      name: String,
      director_name: String,
      production_house: String,
      release_date: String,
      rating: Float
    ): Movie

    deleteMovie(id: ID!): String
  }
`;

module.exports = schema;

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const connectDB = require('./config/db');
const { ApolloServer } = require('apollo-server-express');
const schema = require('./graphql/schema');
const resolver = require('./graphql/resolver');
//Store sensitive information to env variables
const dotenv = require('dotenv');
dotenv.config();

connectDB();

const server = new ApolloServer({
    typeDefs : schema,
    resolvers : resolver,
});

//Define Express Server
const app = express();
app.use(express.json());
app.use('*', cors());


//Add Express app as middleware to Apollo Server
server.applyMiddleware({ app });

//Start listen 
app.listen({ port: process.env.PORT }, () => {  
  console.log(`🚀 Server ready at http://localhost:${process.env.PORT}${server.graphqlPath}`)
});
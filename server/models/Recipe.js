const { Schema, model } = require('mongoose');
const reviewsSchema = require('./Reviews');
const dateFormat = require('../utils/dateFormat');

const recipeSchema = new Schema(
  {
    author: {
        type: String,
   },
   description: {
   type: String,
    required: true,
   },
   recipeId: {
    type: String,
    required: true,
   },
   image: {
    type: String,
  },
  link: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
    username: {
      type: String,
      required: true
    },
    review: [reviewsSchema]
  },
  {
    toJSON: {
      getters: true
    }
  }
);


module.exports = recipeSchema;

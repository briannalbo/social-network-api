//imports schema and model from mongoose
const { Schema, model } = require('mongoose');
//imports the reaction schema to be used within the thought schema
const reactionSchema = require('./Reaction');
//imports date formatting helper
const dateFormat = require('../utils/dateFormat');

//creates thought schema (parameters of how thought data will be organized)
const thoughtSchema = new Schema(
  {
    thoughtText: {
        type: String,
        required: true,
        min_length: 1,
        max_length: 280,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: timestamp => dateFormat(timestamp)
      },
      username: {
        type: String,
        required: true
      },
      reactions: [reactionSchema]
    },
    {
      toJSON: {
        getters: true
      },
      id: false
  });

  thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
  });
  
  const Thought = model('Thought', thoughtSchema);
  //exports thought model
  module.exports = Thought;
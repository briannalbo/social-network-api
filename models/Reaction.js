const { Schema, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const reactionSchema = new Schema (
    {
     reactionId: {
     type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: 'Reaction is required',
        maxlength: 280
    },
    userId: {
        type: Schema.Types.ObjectId,
        required: 'userId is required',
        ref: 'User'
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAt => dateFormat(createdAt)
    },
},
{
    toJSON: {
        getters: true
    }
}
);

module.exports = reactionSchema;
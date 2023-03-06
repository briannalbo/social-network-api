const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      min_length: 6,
      max_length: 25,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must match an email address!'],
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought',
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
},
{    toJSON: {
  virtuals: true,
},
id: false,
}
);

userSchema.virtual('friendCount').get(function () {
return this.friends.length;
});

const User = model('User', userSchema);

module.exports = User;
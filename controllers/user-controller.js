const { User, Thought } = require('../models');

const userController = {
  // gets all users from db
  getUsers(req, res) {
    User.find()
      .select('-__v')
      .then((dbUserData) => {
        res.json(dbUserData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
// create a new user
createUser(req, res) {
  User.create(req.body)
    .then((dbUserData) => {
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
},
getSingleUser(req, res) {
  User.findOne({ _id: req.params.userId })
    .select('-__v')
    .populate({path: 'friends', select: '-__v'})
    .populate({path: 'thoughts', select: '-__v'})
    .then(async (user) =>
      !user
        ? res.status(404).json({ message: 'No user found with that Id.' })
        : res.json(user)
    )
    .catch((err) =>
      res.status(500).json(err)
    )
},
updateUser(req, res) {
  User.findOneAndUpdate(
    { _id: req.params.userId }, 
    { $set: req.body }, 
    { runValidators: true, new: true } 
  )
    .then((user) =>
      !user
        ? res.status(404).json({ message : "No user found with this Id." })
        : res.json(user)
    )
    .catch((err) => {
      res.status(400).json({err});
      console.log(err);
    });
},
deleteUser(req, res) {
  User.findOneAndRemove({ _id: req.params.userId }) 
    .then((user) =>
      !user
        ? res.status(404).json({ message : "No user found with this Id." })
        : Thought.deleteMany({ _id: { $in: user.thoughts } })
    )
    .then(() => res.json({ message: "User deleted!" }))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
},
addFriend(req, res) {
  console.log('You are adding a friend');
  User.findOneAndUpdate(
    { _id: req.params.userId },
    { $addToSet: { friends: req.params.friendId } },
    { runValidators: true, new: true }
  )
    .then((user) =>
      !user
        ? res
          .status(404)
          .json({ message: 'No user found' })
        : res.json(user)
    )
    .catch((err) => res.status(500).json(err));
},
deleteFriend(req, res) {
  User.findOneAndUpdate(
    { _id: req.params.userId },
    { $pull: { friends: req.params.friendId } },
    { runValidators: true, new: true },
    console.log('friend removed')
  )
    .then((user) =>
      !user
        ? res
          .status(404)
          .json({ message: 'No user found' })
        : res.json(user)
    )
    .catch((err) => res.status(500).json(err));
}
};

module.exports = userController;
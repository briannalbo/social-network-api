const { Thought, User } = require('../models');

const thoughtController = {
    getThoughts(req, res) {
        Thought.find()
          .then((thoughts) => res.json(thoughts))
          .catch((err) => res.status(500).json(err));
      },

      createThought(req, res) {
        Thought.create(req.body) 
          .then((thought) => res.json(thought))
          .catch((err) => {
            console.log(err);
            res.status(400).json(err);
          });
        },

        createReaction(req, res) {
            Thought.findOneAndUpdate(
              { _id: req.params.thoughtId }, 
              { $push: { reactions: req.body } },
              { runValidators: true, new: true } 
            )
              .then((thought) =>
                !thought
                  ? res.status(404).json({ message: "No thought found with this id" })
                  : res.json(thought)
              )
              .catch((err) => {
                console.log(err);
                res.status(400).json({err});
              });

    },
}


    module.exports = thoughtController;
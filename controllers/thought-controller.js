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
        }

    }

    module.exports = thoughtController;
const router = require('express').Router();
const { getThoughts, createThought, createReaction } = require('../../controllers/thought-controller');

router.route('/').get(getThoughts).post(createThought);
router.route('/:thoughtId/reactions').post(createReaction);

module.exports = router;
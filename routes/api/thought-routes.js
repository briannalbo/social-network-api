const router = require('express').Router();
const { getThoughts, createThought, createReaction, getSingleThought, updateThought, deleteThought,deleteReaction } = require('../../controllers/thought-controller');

router.route('/').get(getThoughts).post(createThought);
router.route('/:thoughtId/reactions').post(createReaction);
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

module.exports = router;
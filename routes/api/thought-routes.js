const router = require('express').Router();
const { getThoughts, createThought, createReaction, getSingleThought, updateThought, deleteThought } = require('../../controllers/thought-controller');

router.route('/').get(getThoughts).post(createThought);
router.route('/:thoughtId/reactions').post(createReaction);
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

module.exports = router;
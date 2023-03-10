//imports express router
const router = require('express').Router();
//imports thought queries
const { getThoughts,
    createThought,
    createReaction,
    getSingleThought,
    updateThought,
    deleteThought,
    deleteReaction } = require('../../controllers/thought-controller');

//assigns paths for the different types of requests a user may make & passes in their corresponding queries
router.route('/').get(getThoughts).post(createThought);
router.route('/:thoughtId/reactions').post(createReaction);
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

//exports routing info
module.exports = router;
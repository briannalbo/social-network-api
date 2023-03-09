const router = require('express').Router();
const {
  getUsers,
  createUser,
  getSingleUser,
  updateUser,
  deleteUser,
} = require('../../controllers/user-controller');

router.route('/').get(getUsers).post(createUser);
// /api/users/:userId
router.route('/:userId').get(getSingleUser).delete(deleteUser).put(updateUser);

module.exports = router;
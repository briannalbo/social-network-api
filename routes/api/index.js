//imports express router
const router = require('express').Router();
//imports user routes
const userRoutes = require('./user-routes');
const thoughtRoutes = require('./thought-routes');

//assigns user routes and thought routes to the paths they will use
router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

//exports routing
module.exports = router;
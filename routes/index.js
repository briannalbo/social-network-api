//imports express router
const router = require('express').Router();

//imports all routing in the api folder
const apiRoutes = require('./api/');

//assigns path for the api routes
router.use('/api', apiRoutes);

//exports routing info
module.exports = router;
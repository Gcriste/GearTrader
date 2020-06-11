const router = require('express').Router();

const userRoutes = require('./users');
const gearRoutes = require('./gears');
const offerRoutes = require('./offers');
const imageRoutes = require('./images');
// routes
router.use('/users', userRoutes);
router.use('/gears', gearRoutes);
router.use('/offers', offerRoutes);
router.use('/images', imageRoutes);

module.exports = router;

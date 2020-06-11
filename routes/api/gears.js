const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const multer = require('multer');
const gearsController = require('../../controllers/gearsController');

// Matches with "/api/gears"
router.route('/').get(gearsController.findAll).post(gearsController.create);

// // Matches with "/api/gears/:userid"
// router.route('/:userid').get(gearsController.findById).put(gearsController.update);

router.route('/:id').get(gearsController.find).delete(gearsController.remove);

module.exports = router;

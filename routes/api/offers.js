const router = require('express').Router();
const offersController = require('../../controllers/offersController');

// Matches with "/api/offers"
router.route('/').get(offersController.findAll).post(offersController.create);

router.route('/user/:userid').get(offersController.findById);

// Matches with "/api/offers/gears/:gearid"
router.route('/gear/:gearid').get(offersController.find).put(offersController.update);

router.route('/:id').delete(offersController.remove);

module.exports = router;

const router = require('express').Router();
const multer = require('multer');
const imagesController = require('../../controllers/imagesController');

// router.route('/').get(imagesController.findAll).post(imagesController.create);
const DIR = '../../client/public/';

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, DIR);
	},
	filename: (req, file, cb) => {
		const fileName = file.originalname.toLowerCase().split(' ').join('-');
		cb(null, uuidv4() + '-' + fileName);
	}
});
var upload = multer({
	storage: storage,
	fileFilter: (req, file, cb) => {
		if (file.mimetype == 'image/png' || file.mimetype == 'image/jpg' || file.mimetype == 'image/jpeg') {
			cb(null, true);
		} else {
			cb(null, false);
			return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
		}
	}
});
router.route('/').get(imagesController.findAll).post(imagesController.create, upload.single('image'));

module.exports = router;

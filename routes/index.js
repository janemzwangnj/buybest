const { Router } = require('express');
const router = Router();
const controllers = require('../controllers');

router.get('/', (req, res) => res.send('This is root!'));
router.get('/products', controllers.getAllProducts);
router.post('/prodcuts/:title', controllers.getProductsByName);
router.get('/reviews', controllers.getAllReviews);
router.post('/createreviews', controllers.createReview);
router.get('/reviews/:id', controllers.getReviewsById);

module.exports = router;

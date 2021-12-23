const { Router } = require('express');
const router = Router();
const controllers = require('../controllers');

router.get('/', (req, res) => res.send('This is root!'));
router.get('/products', controllers.getAllProducts);
router.get('/products/:id', controllers.getProductsById);
router.put('/products/:id', controllers.updateProduct);
router.get('/reviews', controllers.getAllReviews);
router.post('/createreviews', controllers.createReview);
router.get('/reviews/:id', controllers.getReviewsById);
router.delete('/reviews/:id', controllers.deleteReview);
router.put('/reviews/:id', controllers.updateReview);

module.exports = router;

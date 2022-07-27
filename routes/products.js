const { Router } = require('express');
const express = require('express');
const passport = require('passport');

const router = express.Router();
// Home controller for products
const productController = require('../controllers/products_controller');

// products routes
router.post('/products/create',passport.authenticate('jwt',{session:false}),productController.create);
router.get('/products',productController.getProducts);
router.delete('/products/:id',passport.authenticate('jwt',{session:false}),productController.deleteProducts);
router.patch('/products/:id/update_quantity/',passport.authenticate('jwt',{session:false}),productController.patchProducts);
// User related separate routes
router.use('/users',require('./user'));
module.exports = router;
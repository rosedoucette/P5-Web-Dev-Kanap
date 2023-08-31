const express = require('express');
const router = express.Router();

const productCtrl = require('../controllers/product');

router.get('/', productCtrl.getAllProducts); //the '/' would have to come after api/product
router.get('/:id', productCtrl.getOneProduct);
router.post('/order', productCtrl.orderProducts);

module.exports = router;


const express = require('express');
const router = express.Router();

const {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  adjustStock,
  deleteProduct,
  getLowStockReport,
  getCategorySummary,
} = require('../controllers/productController');

router.get('/reports/low-stock', getLowStockReport);
router.get('/reports/category-summary', getCategorySummary);

router.route('/').get(getAllProducts).post(createProduct);

router
  .route('/:id')
  .get(getProductById)
  .put(updateProduct)
  .delete(deleteProduct);

router.patch('/:id/stock', adjustStock);

module.exports = router;

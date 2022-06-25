const express = require("express");
const {
  getProducts,
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct,
  getProductBycategory,
} = require("../controllers/productController");
const { protect, admin } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").get(getProducts).post(addProduct);
router.route("/:uuid").put(updateProduct).get(getProduct).delete(deleteProduct);
router.route("/category/:tag/:filterId").get(getProductBycategory);

module.exports = router;

const {
  getAllProducts,
  getOneProduct,
} = require("../controllers/productController");
const router = require("express").Router();

router.route("/").get(getAllProducts);
router.route("/:id").get(getOneProduct);

module.exports = router;

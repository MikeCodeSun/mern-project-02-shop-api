const getAllProducts = require("../controllers/productController");

const router = require("express").Router();

router.route("/").get(getAllProducts);

module.exports = router;

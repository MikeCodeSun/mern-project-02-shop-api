const mongoose = require("mongoose");
const Product = require("./models/productModel");
require("dotenv").config();
const products = require("./products.json");

const insertData = async () => {
  try {
    await mongoose.connect(process.env.URI);
    await Product.deleteMany();
    await Product.create(products);
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

insertData();

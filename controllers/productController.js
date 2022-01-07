const Product = require("../models/productModel");

const getAllProducts = async (req, res) => {
  const { name, company, featured, sort, fields, numberFiltes } = req.query;
  let queryObj = {};
  if (name) {
    console.log(name);
    queryObj.name = { $regex: name, $options: "i" };
  }
  if (company) {
    console.log(company);
    queryObj.company = { $regex: company, $options: "i" };
  }
  if (featured) {
    console.log(featured);
    queryObj.featured = featured === "true" ? true : false;
  }

  if (numberFiltes) {
    console.log(numberFiltes);
    const operatorMap = {
      ">": "$gt",
      ">=": "$gte",
      "=": "$eq",
      "<": "$lt",
      "<=": "$lte",
    };
    const regex = /\b(>|>=|=|<|<=)\b/g;
    const filters = numberFiltes.replace(
      regex,
      (match) => `-${operatorMap[match]}-`
    );
    console.log(filters);
    filters.split(",").forEach(function (item) {
      item = item.split("-");
      console.log(item);
      const options = ["price", "rating"];
      const [filed, operator, vale] = item;
      if (options.includes(filed)) {
        queryObj[filed] = { [operator]: vale };
      }
    });
  }

  let result = Product.find(queryObj);
  if (sort) {
    console.log(sort);
    const sortList = sort.split(",").join(" ");
    result = result.sort(sortList);
  }
  if (fields) {
    console.log(fields);
    const fieldsList = fields.split(",").join(" ");
    result = result.select(fieldsList);
  }

  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  result = result.limit(limit).skip(skip);
  const products = await result;
  res.status(200).json({ products, length: products.length });
};

module.exports = getAllProducts;

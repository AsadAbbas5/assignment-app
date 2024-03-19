const express = require("express");
const Product = require("../");
const router = express.Router();
const mongoose = require("mongoose");


router.post("/addproduct", async (req, res) => {
  try {
    const data = {
        productTitle:req.body.productTitle,
        productPrice:req.body.productPrice,
    };
    if (req.file && req.file.filename) {
      data.productImage = req.file.filename;
    }

    const product = new addProduct(data);

    await product.save();

    const products = await addProduct.find();
    res.status(200).send({
      success: true,
      product: products,
    });
  } catch (error) {
    console.log(error);
  }
});
router.get("/loadProduct", async (req, res) => {
  try {
    const products = await Product.find();
    console.log(products);
    res.status(200).send({
      success: true,
      product: products,
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;

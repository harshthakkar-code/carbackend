var express = require('express');
var router = express.Router();
var productSchema = require('../models/product.model');

router.post('/create', function (req, res, next) {
  let bodyValue = req.body;
  productSchema.create(bodyValue).then((data) => {
    res.send(data);
  }).catch((error) => {
    res.send(error);
  })
});

router.get('/get', function (req, res, next) {
  productSchema.find().then((data) => {
    res.send(data);
  }).catch((error) => {
    res.send(error);
  })
});

router.get('/get/:id', function (req, res, next) {
  const id = req.params.id;
  productSchema.findById(req.params.id).then((data) => {
    res.send(data);
  }).catch((error) => {
    res.send(error);
  })
})

module.exports = router;

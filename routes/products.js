var express = require('express');
var router = express.Router();
var productSchema = require('../models/product.model');

router.post('/create', function (req, res, next) {
  let bodyValue = req.body;
  productSchema.create(bodyValue).then((data) => {
    res.send(data);
  }).catch((error) => {
    return res.status(404).json({ message: 'Item not created' });
  })
});

router.get('/get', function (req, res, next) {
  productSchema.find().then((data) => {
    res.send(data);
  }).catch((error) => {
    return res.status(404).json({ message: 'Items not found' });
  })
});

router.get('/get/:id', function (req, res, next) {
  const id = req.params.id;
  productSchema.findById(req.params.id).then((data) => {
    res.send(data);
  }).catch((error) => {
    return res.status(404).json({ message: 'Item not found' });
  })
})

router.put('/update/:id', function (req, res, next) {
  const id = req.params.id;
  const bodyValue = req.body;
  productSchema.findByIdAndUpdate(id, bodyValue,{new: true}).then((data) => {
    res.send(data);
  }).catch((error) => {
    return res.status(404).json({ message: 'Item not found' });
  })
})

router.delete('/delete/:id', function (req, res, next) {
  const id = req.params.id;
  productSchema.findByIdAndDelete(id).then((data) => {
    res.send(data);
  }).catch((error) => {
    return res.status(404).json({ message: 'Item not deleted' });
  })
})

module.exports = router;

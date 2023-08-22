var express = require('express');
var router = express.Router();

/* New Product. */
router.post('/new', function(req, res, next) {
  res.send('My Personal Car');
});

module.exports = router;

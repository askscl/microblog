var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('list', { 
      title: 'Express',
      items: [2020, 'byvoid', 'express', 'Node.js']
  });
});

module.exports = router;

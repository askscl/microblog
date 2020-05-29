var express = require('express');
var router = express.Router();

/* GET hello page. */
router.get('/', function(req, res, next) {
  //res.send('the time is ' + new Date().toString());
  //res.send('user:' + req.params.username);
  //res.render('index', { title: 'the time is ' + new Date().toString() });
  res.render('index',  {title: 'hello'});
});

module.exports = router;

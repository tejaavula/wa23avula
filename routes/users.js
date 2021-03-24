var express = require('express');
var router = express.Router();

var x=0;

/* GET users listing. */
router.get('/', function(req, res, next) {
  x+=1;
  res.send('User accesses are: '+x);
});

module.exports = router;

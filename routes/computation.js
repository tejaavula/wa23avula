var express = require('express');
var router = express.Router();
var x ;
/* GET users listing. */
router.get('/', function (req, res, next) {
 
x = Math.random();
// res.send('hello');
res.write('[Math.round()] applied to ' + `${ [x]}` + ' is ' + `${[Math.round(x)]}\n`);
 
res.write('[Math.fround()] applied to ' + `${ [x]}` + ' is ' + `${[Math.fround(x)]}`);
res.end();
});

module.exports=router
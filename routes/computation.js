var express = require('express');
var router = express.Router();
var x ;
/* GET users listing. */
router.get('/', function (req, res, next) {
 
x = Math.floor(Math.random()*100)+1;
// res.send('hello');
res.write('[Math.atan()] applied to ' + `${ [x]}` + ' is ' + `${[Math.atan(x)]}\n`);
 
res.write('[Math.exp()] applied to ' + `${ [x]}` + ' is ' + `${[Math.exp(x)]}`);
res.end();
});

module.exports=router
var express = require('express');
var router = express.Router();
var x;
/* GET users listing. */
router.get('/', function (req, res, next) {

    x = Math.random();
    // res.send('hello');
    res.write('[Math.exp()] applied to ' + `${[x]}​​​​​​​​` + ' is ' + `${[Math.exp(x)]}​​​​​​​​\n`);

    res.write('[Math.expm1()] applied to ' + `${[x]}​​​​​​​​` + ' is ' + `${[Math.expm1(x)]}​​​​​​​​`);
    res.end();
});
module.exports = router;


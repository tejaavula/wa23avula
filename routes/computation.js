var express = require('express');
var router = express.Router();
var x;
/* GET users listing. */
var express=require('express')
var router=express.Router()

router.get('/',(req,res)=>{
    let randomNumber=Math.floor(Math.random()*100)+1
    let data=req.query.x
    console.log(data)
    res.render('computation',{
        randomSolution:`Exponent ${randomNumber} is ${Math.exp(randomNumber)}`,
        querySolution:`Exponent of ${data} is ${Math.exp(data)}`
    })
})

module.exports=router


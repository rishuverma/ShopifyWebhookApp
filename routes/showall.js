const express=require('express');
const router=express.Router();
const jsonschema=require('../models/jsonmodel');

router.use('/showall',(req,res,next)=>{
	console.log('inshow all');
	jsonschema.find({}).exec((err,obj)=>{
		if(err){
			console.log(err);
			res.send("err");
		}
		else{
			res.render('showall',{customerdb:obj});
			//res.sendStatus(200);
		}
	});
	
});
module.exports=router;
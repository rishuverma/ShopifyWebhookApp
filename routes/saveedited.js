const express=require('express');
const router=express.Router();
const jsonschema=require('../models/jsonmodel');


router.use('/saveedited/:id',(req,res,next)=>{
	
	console.log("body",req.body,"email",req.body.email);
	var id=req.params.id;
	console.log('saveedited ',id);
	var email=req.body.email;
	var number=req.body.number;
	var currency=req.body.currency;
	var price=req.body.total_price;
	console.log("email attr",email);
	jsonschema.findOneAndUpdate({"_id":id},{$set:{"email":email,"number":number,"currency":currency,"total_price":price}},{upsert:false},(err,obj)=>{
		
			if(err){
				console.log(err);
				res.send("err");
			}
			else{
				console.log('this obj updated');
				res.redirect('/showall');
			}
		});
	
});
module.exports=router;
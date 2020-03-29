const express=require('express');
const router=express.Router();
const jsonschema=require('../models/jsonmodel');

router.use('/edit/:id',(req,res,next)=>{
	var id=req.params.id;
	console.log('in edit',id);
	jsonschema.find({"_id":id}).exec((err,obj)=>{
		if(err){
			console.log(err);
			res.send("err");
		}
		else{
			res.render('editorder',{editcustomer:obj});
			//res.render('testejs',{editcustomer:obj});
			//res.sendStatus(200);
		}
	});
	// res.sendStatus(200);
});
module.exports=router;
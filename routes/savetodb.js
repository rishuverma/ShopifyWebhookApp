const express=require('express');
const router=express.Router();
const jsonschema=require('../models/jsonmodel');

router.use('/savetodb',(req,res,next)=>{
	var data=new jsonschema(req.body);
	// data=req.body;
	// data2=JSON.stringify(data);
	//data3=JSON.parse(data);
	//console.log('data is\n\n',data,'\n\ndata2 is\n\n',data2);//,'\n\ndata3 is \n\n\n',data3);
	data.save((err,obj)=>{
		if(err){
			console.log('\n\n\n\nerr occured during saving json to db',err);
			res.send("err");
		}
		else{
			console.log(obj,'this object is saved in db');
			//res.sendStatus(200);
		}
	});
	res.sendStatus(200);
});
module.exports=router;
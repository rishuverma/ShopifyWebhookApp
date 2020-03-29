const mongodb=require('mongodb');
const express=require('express'); 
const bodyparser=require('body-parser');
const mongoose=require('mongoose');
const path=require('path');
//const getRawbody=require('raw-body');

const savetodb=require('./routes/savetodb');
const showAllOrders=require('./routes/showall');
const editOrder=require('./routes/editorder');
const saveEdited=require('./routes/saveedited');


app=express();
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));



app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

mongoose.connect('mongodb://127.0.0.1:27017/shopifytest');





app.use(saveEdited);

app.use(showAllOrders);
app.use(savetodb);
app.use(editOrder);
















































app.use('/a',(req,res,next)=>{
	res.send("<form method=POST action='/data'  ><input type='text' name='abcv'><input type='submit'></form>");
});
app.post('/data',(req,res,next)=>{
	console.log("got something");
	console.log(req.body.abcv);
});
app.post('/shopifyjson',(req,res,next)=>{
	console.log("getting response from shopify");
	// const body=getRawbody(req);
	// console.log(body.body,body.id,body.email);
	 console.log(JSON.stringify(req.body, null, ' '));
    res.sendStatus(200);
});
app.listen(3000)

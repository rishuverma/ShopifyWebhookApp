const mongoose=require('mongoose');

const schema=mongoose.Schema;

const jsonschema=new schema({email:String},{strict:false});
module.exports=mongoose.model('jsonschema',jsonschema);
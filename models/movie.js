import { dateTimeValue } from "docx";
import mongoose from "mongoose";

// creating schema
const movieSchema=new mongoose.Schema({
name:{
  type:String,
  required:true,
  trim:true
},
rating : {
  type:Number,
  required:true,
  min:0,
  max:5
},
money:{
  type:mongoose.Decimal128,
  required:true,
  validate:(v)=> v>=10
},
genre:{
  type:Array
},
isActive:{
type:Boolean
},
Comment:[{value:{type:String},published:{type:Date,default:Date.now}}],
});

// creating model
const MovieModel =mongoose.model('Movie',movieSchema);

const insertManyDoc = async()=>{
  try {
    
  } catch (error) {
    console.log("error");
  }
} 
export default MovieModel;
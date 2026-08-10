import { dateTimeValue } from "docx";
import mongoose from "mongoose";

// creating schema
const movieSchema=new mongoose.Schema({
name:{
  type:String,
  required:true,
  trim:true
},
ratings : {
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
Comments:[{value:{type:String},published:{type:Date,default:Date.now}}],
});

// creating model
const MovieModel =mongoose.model('Movie',movieSchema);

const insertManyDoc = async()=>{
  try {
    const m1 = new MovieModel({
  name: "Extraction 2",
  ratings: 4,
  money: 60000,
  genre: ["action", "adventure"],
  isActive: true,
  comments: [
    { value: "That was an amazing movie." }
  ]
});

const m2 = new MovieModel({
  name: "John Wick Chapter 4",
  ratings: 5,
  money: 23000,
  genre: ["action"],
  isActive: true,
  comments: [
    { value: "John Wick was amazing!" }
  ]
});

const m3 = new MovieModel({
  name: "The Dark Knight",
  ratings: 5,
  money: 55000,
  genre: ["action", "crime", "drama"],
  isActive: true,
  comments: [
    { value: "One of the best superhero movies." }
  ]
});

const m4 = new MovieModel({
  name: "Interstellar",
  ratings: 5,
  money: 45000,
  genre: ["sci-fi", "adventure", "drama"],
  isActive: true,
  comments: [
    { value: "The story and visuals were incredible." }
  ]
});

const m5 = new MovieModel({
  name: "The Equalizer 3",
  ratings: 4,
  money: 30000,
  genre: ["action", "thriller"],
  isActive: false,
  comments: [
    { value: "Good action movie with a great ending." }
  ]
});
  const result = await MovieModel.insertMany([m1,m2,m3,m4,m5]);
  console.log(result);
  } catch (error) {
    console.log(error);
  }
} 
export {insertManyDoc};
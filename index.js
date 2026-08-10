import express from "express";
import connectDB from './db/connectDB.js';
import {insertManyDoc } from "./models/movie.js";
const app=express();
const port= process.env.PORT || 8000;
const Database_URL= process.env.Database_URL || 'mongodb://127.0.0.1:27017/movies';

connectDB(Database_URL);

insertManyDoc();

app.listen(port ,()=>console.log(`Server listening on port ${port}`));
import express from "express";
import connectDB from './db/connectDB.js';
import {allDoc } from "./models/movie.js";
const app=express();
const port= process.env.PORT || 8000;
const Database_URL= process.env.Database_URL || 'mongodb://127.0.0.1:27017/movies';

connectDB(Database_URL);

allDoc('6a79c8822d8b85b0320b71fd');

app.listen(port ,()=>console.log(`Server listening on port ${port}`));
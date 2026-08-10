import mongoose from "mongoose";
const connectDB=async(DatabaseDb_URL)=>{
  try {
    await mongoose.connect(DatabaseDb_URL);
    console.log("Database Connect...");
  } catch (error) {
    console.log(error);
  }
}

export default connectDB;
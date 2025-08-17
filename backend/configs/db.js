import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // console.log(process.env.MONGODB_URL);

    await mongoose.connect(process.env.MONGODB_URL);

    console.log("database connected successfully");
  } catch (error) {
    console.log("database connection failed", error.message);
  }
};

export default connectDB;

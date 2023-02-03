import mongoose from "mongoose";
const connectDB = async () => {
  try {
    mongoose.set('strictQuery', false);
    const conn = await mongoose.connect(process.env.MONGO_URI as string);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error connecting to MongoDB ${error.message}`);
    process.exit(1);
  }
};

export { connectDB };

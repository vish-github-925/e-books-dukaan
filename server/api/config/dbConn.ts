import mongoose from "mongoose";
const connectDB = async () => {
  try {
    let mongo_uri = "";
    mongoose.set("strictQuery", false);
    if (process.env.NODE_ENV === "production") {
      mongo_uri = process.env.MONGO_PROD_URI;
    } else {
      mongo_uri = process.env.MONGO_URI;
    }
    const conn = await mongoose.connect(mongo_uri as string);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error connecting to MongoDB ${error.message}`);
    process.exit(1);
  }
};

export { connectDB };

import mongoose from "mongoose"
const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("mongoose connected");
  } catch {
    console.log("mongoose did not connect");
  }
};
export default connectDb;
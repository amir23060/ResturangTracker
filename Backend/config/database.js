import mongoose from "mongoose"
const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("mongoose connected");
  } catch(erorr) {
    console.log("mongoose did not connect",erorr);
  }
};
export default connectDb;
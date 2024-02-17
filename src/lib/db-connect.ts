import mongoose from "mongoose";

const connectDB = async () => {
  try {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(
        "mongodb+srv://ghulam:1234@cluster0.naqujkq.mongodb.net/cd-db?retryWrites=true&w=majority"
      );
      console.log("db connected");
    }
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;

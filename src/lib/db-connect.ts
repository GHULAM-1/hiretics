import mongoose from "mongoose";
export async function connect() {
  try {
    mongoose.connect(process.env.MONGODB_URI!);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("MongoDB connected successfully");
    });
    connection.on("error", (err) => {
      console.log(
        "MongoDB connection error. Please make sure MongoDB is running. " + err
      );
      process.exit();
    });
  } catch (error) {
    console.log("Something goes wrong!");
    console.log(error);
  }
}
=======

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

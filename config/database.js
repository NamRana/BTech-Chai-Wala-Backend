import mongoose from "mongoose";

export const connectDB = async () => {
  const { connection } = await mongoose.connect("mongodb+srv://Abhay:abhay@cluster0.ifw5vyj.mongodb.net/Burger?retryWrites=true&w=majority");

  console.log(`Database is connect with ${connection.host}`);
};

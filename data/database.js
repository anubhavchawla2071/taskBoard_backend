import mongoose from "mongoose";

export const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "backend",
    })
    .then(() => console.log("Database connected successfully"))
    .catch((e) => console.log(e));
};

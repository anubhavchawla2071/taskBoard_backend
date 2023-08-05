import mongoose from "mongoose";

export const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "backend",
    })
    .then((c) => console.log(`Database connected successfully ${c.connection.host}`))
    .catch((e) => console.log(e));
};

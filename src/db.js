// import mongoose from "mongoose";

// export const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URL);
//     console.log("MongoDB connected ✅");
//   } catch (error) {
//     console.error("Mongo error ❌", error);
//     process.exit(1);
//   }
// };
import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    console.log("👉 MONGO_URL:", process.env.MONGO_URL); // 👈 ВАЖЛИВО
    console.log("Connecting to Mongo...");

    await mongoose.connect(process.env.MONGO_URL);

    console.log("MongoDB connected ✅");
  } catch (error) {
    console.error("Mongo error ❌", error);
    process.exit(1);
  }
};

import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./routes";

dotenv.config(); // Load environment variables

const app = express();
app.use(express.json());

// Connect to MongoDB using the environment variable
mongoose
  .connect(process.env.MONGO_URL as string, {
    dbName: "node-typescript-app",
  })
  .then(() => {
    console.log("Database connected");
  })
  .catch((error) => console.log("Database connection error:", error));

app.use('/', router)

app.listen(4000, () => {
  console.log("Server running on http://localhost:4000");
});

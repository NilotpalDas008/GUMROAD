import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import healthRoutes from "./routes/healthRoutes.js";


dotenv.config();
const app = express();
//Database connection
connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/health", healthRoutes);


const PORT = 5000;
app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});
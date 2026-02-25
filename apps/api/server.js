import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import healthRoutes from "./routes/healthRoutes.js";
import errorHandler from "./middleware/errorMiddleware.js";


dotenv.config();
const app = express();
//Database connection
connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/health", healthRoutes);


app.use(errorHandler);     // error handler should be after routes 

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});
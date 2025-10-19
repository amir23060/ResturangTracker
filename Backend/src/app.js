import express from "express";
import cors from "cors";
import dotenv from "dotenv"
dotenv.config()

import restaurantRoutes from "../routes/restaurantRoutes.js";
import connectDb from "../config/database.js";
import userRouter from "../routes/userRoutes.js";
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;

app.use("/api", restaurantRoutes);
app.use("/api", userRouter);

connectDb();

app.get("/", (req, res) => {
  res.json({ ok: true });
});

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
export default app;
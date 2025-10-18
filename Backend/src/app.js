import express from "express";
import cors from "cors";
import dotenv from "dotenv"
dotenv.config()

import restaurantRoutes from "../routes/restaurantRoutes.js";
import connectDb from "../config/database.js";
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", restaurantRoutes);
connectDb()
app.get("/", (req, res) => {
    res.json({ ok: true });
});
app.listen( process.env.PORT, () => {
    console.log("Server is running on port " + (process.env.PORT));
});

export default app;
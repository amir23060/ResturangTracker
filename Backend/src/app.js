import express from "express";
import cors from "cors";
import restaurantRoutes from "./routes/restaurantRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", restaurantRoutes);

app.get("/", (req, res) => {
    res.json({ ok: true });
});

export default app;
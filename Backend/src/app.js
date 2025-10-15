import express from "express";
import cors from "cors";
import restaurantRoutes from "./routes/restaurantRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());


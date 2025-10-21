import mongoose from "mongoose";
import Restaurant from "../models/restaurantModel.js";
import { restaurants } from "../Restaurants.js";

export async function listRestaurants(req, res) {
  return res.status(200).json(restaurants);
}

export async function getRestaurantById(req, res) {
  try {
    const r = await Restaurant.findOne({ id: req.params.id }).lean();
    if (!r) return res.status(404).json({ error: "Restaurant not found" });
    res.json(r);
  } catch {
    res.status(500).json({ error: "Failed to get restaurant" });
  }
}

export async function listCategories(_req, res) {
  try {
    const cats = await Restaurant.distinct("categories");
    res.json(cats.sort());
  } catch {
    res.status(500).json({ error: "Failed to list categories" });
  }
}

export function dbHealth(_req, res) {
  const state = mongoose.connection.readyState;
  res.json({ ok: state === 1, state });
}

function escapeRegex(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}

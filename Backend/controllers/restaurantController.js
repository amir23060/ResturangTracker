import mongoose from "mongoose";
import Restaurant from "../models/restaurantModel.js";

export async function listRestaurants(req, res) {
    try {
        const { category, q } = req.query;
        const filter = {};
        if (category) filter.categories = new RegExp(`^${escapeRegex(String(category))}$`, "i");
        if (q) filter.$or = [
            { name: { $regex: q, $options: "i" } },
            { "locations.address": { $regex: q, $options: "i" } }
        ];
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 20;

        const docs = await Restaurant.find(filter)
        .skip((page - 1) * limit)
        .limit(limit)
        .lean();

        res.json(docs);
    } catch {
        res.status(500).json({ error: "Failed to list restaurants" });
    }
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
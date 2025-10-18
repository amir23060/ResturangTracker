import { Router } from "express";
import { restaurants } from "../Restaurants.js";

const router = Router();

router.get("/restaurants", (req, res) => {
  const { category, q } = req.query;
  let result = restaurants;

  if (category) {
    const c = String(category).toLowerCase();
    result = result.filter(r => r.categories.some(cat => cat.toLowerCase() === c));
  }

  if (q) {
    const term = String(q).toLowerCase();
    result = result.filter(r =>
      r.name.toLowerCase().includes(term) ||
      r.locations.some(loc => loc.address.toLowerCase().includes(term))
    );
  }

  res.json(result);
});

router.get("/restaurants/:id", (req, res) => {
  const { id } = req.params;
  const restaurant = restaurants.find(r => r.id === id);
  if (!restaurant) {
    return res.status(404).json({ error: "Restaurant not found" });
  }
  res.json(restaurant);
});

router.get("/categories", (req, res) => {
  const set = new Set();
  for (const r of restaurants) {
    for (const c of r.categories) set.add(c);
  }
  res.json(Array.from(set).sort());
});

export default router;
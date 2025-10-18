import { Router } from "express";
import { listRestaurants, getRestaurantById, listCategories }  from "../controllers/restaurantController.js";

const router = Router();

router.get("/restaurants", listRestaurants);
router.get("/restaurants/:id", getRestaurantById);
router.get("/categories", listCategories);

export default router;
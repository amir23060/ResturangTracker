import { Router } from "express";
import { addUser, getUser, getUserById } from "../controllers/userControllers.js";

const userRouter = Router();


userRouter.post("/users", addUser);
userRouter.post("/users/login", getUser);
userRouter.get("/users/:id", getUserById);

export default userRouter;
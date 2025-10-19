import { Router } from "express";
import { addUser, getUser, getUserById } from "../controllers/userControllers.js";
const userRouter = Router();
userRouter.post("/users" ,addUser)
userRouter.get("/users/login",getUser)
userRouter.get("/users/:id",getUserById)
export default userRouter
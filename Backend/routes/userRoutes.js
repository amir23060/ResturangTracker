import { Router } from "express";
import { addUser, getUser, getUserById } from "../controllers/userControllers.js";
const userRouter = Router();
userRouter.post("/" ,addUser)
userRouter.get("/login",getUser)
userRouter.get("/:id",getUserById)
export default userRouter
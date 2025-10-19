import { Router } from "express";
import { addUser, getUser, getUserById } from "../controllers/userControllers.js";
import { verifyToken } from "../middleware/authMiddleware.js";
const userRouter = Router();
userRouter.post("/" ,addUser)
userRouter.post("/login",getUser)
userRouter.get("/:id",verifyToken,getUserById)
export default userRouter
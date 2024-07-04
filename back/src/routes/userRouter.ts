import { Router } from "express";
import { getAllUsers, getAllUserById, login, register } from "../controllers/usersController";

const userRouter = Router();

userRouter.get("/", getAllUsers)

userRouter.get("/:id", getAllUserById)

userRouter.post("/register", register)

userRouter.post("/login", login)








export default userRouter;
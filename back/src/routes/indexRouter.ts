import { Router } from "express";
import userRouter from "./userRouter";
import appointmentsRouter from "./appointmentRouter";

const indexRouter = Router();

indexRouter.use("/users", userRouter)
indexRouter.use("/appointments", appointmentsRouter)

export default indexRouter;
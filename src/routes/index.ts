import express, { Router } from "express";
import authRoutes from "./authRoute";
import courseRoutes from "./courseRoute";

const router = Router();
const apiRoute = Router();

//middlewares

apiRoute.use("/auth", authRoutes);
apiRoute.use("course", courseRoutes);
router.use("/api", apiRoute);

export default router;

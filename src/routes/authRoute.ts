import { Router } from "express";
import AuthController from "../controllers/authController";

const router = Router();

//api/auth/signup
router.post("/signup", AuthController.signup);

//api/auth/signin
router.get("/signin", AuthController.signin);

export default router;

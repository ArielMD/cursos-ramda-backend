import { Router } from "express";
import CourseController from "../controllers/courseController";

const router = Router();

//api/course/
router.post("/", CourseController.getCouse);

//api/course/topics
router.get("/topics", CourseController.getTopics);

export default router;

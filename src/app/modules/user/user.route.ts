import express from "express";
import {
  confirmation,
  createUser,
  getAdminUser,
  getTeacher,
} from "./user.controller";
const router = express.Router();

router.get("/test", confirmation);
router.get("/users/:id", getAdminUser);
router.get("/users/teacher/:id", getTeacher);
router.post("/user", createUser);
router.post("/user", createUser);
export const UserRoutes = router;

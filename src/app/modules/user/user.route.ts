import express from "express";
import { confirmation, createUser, getAdminUser } from "./user.controller";
const router = express.Router();

router.get("/test", confirmation);
router.get("/users/:id", getAdminUser);
router.post("/user", createUser);
router.post("/user", createUser);
export const UserRoutes = router;

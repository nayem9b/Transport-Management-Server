import express from "express";
import { confirmation, createUser } from "./user.controller";
const router = express.Router();

router.get("/test", confirmation);
router.post("/user", createUser);
export const UserRoutes = router;

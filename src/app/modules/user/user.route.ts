import express from "express";
import { confirmation } from "./user.controller";
const router = express.Router();

router.get("/test", confirmation);

export const UserRoutes = router;

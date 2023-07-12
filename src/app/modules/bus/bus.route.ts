import express from "express";
import { createBus } from "./bus.controller";

const router = express.Router();

router.post("/add-schedule", createBus);

export const BusRoutes = router;

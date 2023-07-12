import express from "express";
import { createBus, getAllBuses } from "./bus.controller";

const router = express.Router();

router.post("/add-schedule", createBus);
router.get("/all-bus", getAllBuses);
export const BusRoutes = router;

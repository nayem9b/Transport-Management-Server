import express from "express";
import { createBus, getAllBuses, updateSpecificBus } from "./bus.controller";

const router = express.Router();

router.post("/add-schedule", createBus);
router.get("/all-bus", getAllBuses);
router.patch("/edit-schedule/:id", updateSpecificBus);
export const BusRoutes = router;

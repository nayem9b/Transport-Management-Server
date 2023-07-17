import express from "express";
import { createBus } from "../bus/bus.controller";
import { createRequisition, getRequisitions } from "./requisition.controller";

const router = express.Router();

router.post("/add-requisition", createRequisition);
router.get("/requisitions", getRequisitions);

export const BusRequisition = router;

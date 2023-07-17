import express from "express";
import { createBus } from "../bus/bus.controller";
import { createRequisition } from "./requisition.controller";

const router = express.Router();

router.post("/add-requisition", createRequisition);

export const BusRequisition = router;

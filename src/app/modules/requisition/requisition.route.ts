import express from "express";
import { createBus } from "../bus/bus.controller";
import {
  createRequisition,
  getRequisitions,
  deleteSpecificRequisation,
} from "./requisition.controller";

const router = express.Router();

router.post("/add-requisition", createRequisition);
router.get("/requisitions", getRequisitions);
router.delete("/delete-requisition/:id", deleteSpecificRequisation);

export const BusRequisition = router;

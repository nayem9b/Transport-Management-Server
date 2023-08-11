import express from "express";
import { createBus } from "../bus/bus.controller";
import {
  createRequisition,
  getRequisitions,
  deleteSpecificRequisation,
  updateRequisitionStatus,
  getUserRequisition,
} from "./requisition.controller";

const router = express.Router();

router.post("/add-requisition", createRequisition);
router.get("/requisitions", getRequisitions);
router.get("/user-requisition/:id", getUserRequisition);
router.patch("/requisitions/:id", updateRequisitionStatus);
router.delete("/delete-requisition/:id", deleteSpecificRequisation);

export const BusRequisition = router;

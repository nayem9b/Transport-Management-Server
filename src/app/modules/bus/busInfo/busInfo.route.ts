import express from "express";
import { getBusInfo } from "./busInfo.controller";

const router = express.Router();
router.get("/bus-info/:id", getBusInfo);
export const BusInfoRoute = router;

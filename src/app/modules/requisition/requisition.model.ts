import { Schema, model } from "mongoose";
import { IRequisition } from "./requisition.interface";
const mongoose = require("mongoose");
const RequisitionSchema = new Schema<IRequisition>({
  name: {
    type: String,
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
  faculty: {
    type: String,
    required: true,
  },
  dept: {
    type: String,
    required: true,
  },
  ls: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  reason: {
    type: String,
    required: true,
  },
  isVerified: {
    type: String,
    required: true,
  },
});

export const Requisition = model<IRequisition>(
  "Requisition",
  RequisitionSchema
);

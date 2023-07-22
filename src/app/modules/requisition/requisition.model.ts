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
  },
  date: {
    type: String,
    required: true,
  },
  reason: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  employeeId: {
    type: String,
  },
  isVerified: {
    type: String,
  },
  role: {
    type: String,
  },
});

export const Requisition = model<IRequisition>(
  "Requisition",
  RequisitionSchema
);

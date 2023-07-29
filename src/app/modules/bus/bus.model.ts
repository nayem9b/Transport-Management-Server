import { Schema, model } from "mongoose";
import { IBus } from "./bus.interface";
import {
  studentBusStops,
  teacherBusStops,
  terminalBusStops,
} from "./bus.constant";

const busSchema = new Schema<IBus>({
  busType: {
    type: String,
    required: true,
  },
  schedule: {
    type: String,
    required: true,
  },
  busNumber: {
    type: Number,
    required: true,
  },
  day: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  stopage: {
    type: [String],
  },
});

busSchema.pre("save", async function (next) {
  let bus = this;
  if (bus.busType === "Student") {
    bus.stopage = studentBusStops;
  } else {
    bus.stopage = teacherBusStops;
  }
  if (bus.location === "fromTerminal") {
    bus.stopage = terminalBusStops;
  }
  next();
});

export const Bus = model<IBus>("Bus", busSchema);

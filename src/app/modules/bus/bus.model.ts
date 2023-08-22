import { Schema, model } from "mongoose";
import { IBus } from "./bus.interface";
import {
  FromCampusBusStops,
  FromTownBusStops,
  terminalBusStops,
  FromCampusToTerminalBusStops,
  FromCampusStaffBusStops,
  FromTownStaffBusStops,
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
  if (bus.busType === "Student" && bus.location === "fromcampus") {
    bus.stopage = FromCampusBusStops;
  } else if (bus.busType === "Student" && bus.location === "fromtown") {
    bus.stopage = FromTownBusStops;
  } else if (
    bus.busType === "Student" &&
    bus.location === "fromCampusToTerminal"
  ) {
    bus.stopage = FromCampusToTerminalBusStops;
  } else if (bus.busType !== "Student" && bus.location === "fromcampus") {
    bus.stopage = FromCampusStaffBusStops;
  } else if (bus.busType !== "Student" && bus.location === "fromtown") {
    bus.stopage = FromTownStaffBusStops;
  } else if (
    bus.busType !== "Student" &&
    bus.location === "fromCampusToTerminal"
  ) {
    bus.stopage = FromCampusToTerminalBusStops;
  }
  if (bus.location === "fromTerminal") {
    bus.stopage = terminalBusStops;
  }
  next();
});

export const Bus = model<IBus>("Bus", busSchema);

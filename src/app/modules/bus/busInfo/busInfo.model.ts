import { Schema, model } from "mongoose";
import { IBusInfo } from "./busInfo.interface";

const businfo = new Schema<IBusInfo>({
  bNumber: {
    type: Number,
    required: true,
  },
  capacity: {
    type: Number,
    required: true,
  },
  DriverName: {
    type: String,
    required: true,
  },
  MobileNumber: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

export const BusInfo = model<IBusInfo>("businfo", businfo);

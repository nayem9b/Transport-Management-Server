import { Schema, model } from "mongoose";
import { IUser } from "./user.interface";

const userSchema = new Schema<IUser>({
  name: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  password: {
    type: Schema.Types.Mixed,
    required: true,
  },
  studentID: {
    type: Number,
    required: true,
  },
});

export const User = model<IUser>("users", userSchema);

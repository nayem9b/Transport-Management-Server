import { IRequisition } from "./requisition.interface";
import { Requisition } from "./requisition.model";
import { IUser } from "../user/user.interface";
import { User } from "../user/user.model";
import { ObjectId } from "mongodb";

export const createRequisitionToDB = async (
  payload: IRequisition
): Promise<IRequisition> => {
  const requisitionData = new Requisition(payload);
  await requisitionData.save();

  return requisitionData;
};

export const getAllRequisitionFromDB = async () => {
  const allRequisitions = await Requisition.find({});

  return allRequisitions;
};

export const deleteRequisitionFromDB = async (id: string) => {
  const result = await Requisition.findByIdAndDelete(id);
  return result;
};

export const updateRequisitionFromDB = async (id: string, payload) => {
  const filter = { _id: new ObjectId(id) };
  const result = await Requisition.findOneAndUpdate(filter, payload, {
    new: true,
  });
  return result;
};

export const getUserRequisitionFromDB = async (email: string) => {
  const result = await Requisition.find({ email: email }, { isVerified: true });
  return result;
};

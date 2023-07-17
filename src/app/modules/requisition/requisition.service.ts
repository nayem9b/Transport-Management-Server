import { IRequisition } from "./requisition.interface";
import { Requisition } from "./requisition.model";
import { IUser } from "../user/user.interface";
import { User } from "../user/user.model";

export const createRequisitionToDB = async (
  payload: IRequisition
): Promise<IRequisition> => {
  const requisitionData = new Requisition(payload);
  await requisitionData.save();
  console.log(requisitionData);
  return requisitionData;
};

export const getAllRequisitionFromDB = async () => {
  const allRequisitions = await Requisition.find({});
  console.log(allRequisitions);
  return allRequisitions;
};

export const deleteRequisitionFromDB = async (id: string) => {
  const result = await Requisition.findByIdAndDelete(id);
  return result;
};

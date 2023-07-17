import { IRequisition } from "./requisition.interface";
import { Requisition } from "./requisition.model";
export const createRequisitionToDB = async (
  payload: IRequisition
): Promise<IRequisition> => {
  const requisitionData = new Requisition(payload);
  await requisitionData.save();
  console.log(requisitionData);
  return requisitionData;
};

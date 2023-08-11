import { Bus } from "../bus.model";
import { BusInfo } from "./busInfo.model";
export const getBusInfoFromDB = async (bNumber) => {
  const busNumber = parseInt(bNumber);
  console.log(typeof bNumber, typeof busNumber);
  const busInfo = Bus.find({ bNumber: bNumber });
  return busInfo;
};

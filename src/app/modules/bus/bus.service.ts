import { IBus } from "./bus.interface";
import { Bus } from "./bus.model";

export const createBusToDB = async (payload: IBus): Promise<IBus> => {
  const bus = new Bus(payload);
  await bus.save();
  console.log(bus);
  return bus;
};

export const getAllBusFromDB = async (): Promise<IBus[]> => {
  const bus = Bus.find({});
  return bus;
};

import { IBus } from "./bus.interface";
import { Bus } from "./bus.model";

export const createBusToDB = async (payload: IBus): Promise<IBus> => {
  const bus = new Bus(payload);
  await bus.save();
  console.log(bus);
  return bus;
};

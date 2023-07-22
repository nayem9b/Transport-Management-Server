import { IBus } from "./bus.interface";
import { Bus } from "./bus.model";
import { ObjectId } from "mongodb";
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

export const updateSpecificBusFromDB = async (
  id: string,
  payload: Partial<IBus>
) => {
  const specificBus = await Bus.find({
    _id: new ObjectId(id),
  });

  if (specificBus.length > 0) {
    const filter = { _id: new ObjectId(id) };
    const result = await Bus.findOneAndUpdate(filter, payload, {
      new: true,
    });
    return result;
  } else {
    console.log("You Faced an error");
  }
};

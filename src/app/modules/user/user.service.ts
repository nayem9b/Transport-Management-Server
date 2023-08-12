import { ObjectId } from "mongodb";
import { IUser } from "./user.interface";
import { User } from "./user.model";

export const createUserToDB = async (payload: IUser): Promise<IUser> => {
  const user = new User(payload);
  await user.save();
  return user;
};

export const getAllUsersFromDB = async (): Promise<IUser[]> => {
  const allUsers = await User.find({});
  console.log(allUsers);
  return allUsers;
};

export const getAdminFromDB = async (id) => {
  const adminUser = await User.find({ email: id });
  return adminUser;
};
export const getUserFromDB = async (id) => {
  const adminUser = await User.find({ email: id });
  return adminUser;
};

export const verifyUserFromDB = async (id: any, payload: Partial<IUser>) => {
  const filter = { _id: new ObjectId(id) };
  const verifiedUser = await User.findOneAndUpdate(filter, payload, {
    new: true,
  });
  return verifiedUser;
};

import { IUser } from "./user.interface";
import { User } from "./user.model";

export const createUserToDB = async (payload: IUser): Promise<IUser> => {
  const user = new User(payload);
  await user.save();

  return user;
};

export const getAllUsersFromDB = async (): Promise<IUser[]> => {
  const allUsers = await User.find({});

  return allUsers;
};

export const getAdminFromDB = async (id) => {
  const adminUser = await User.find({ email: id });

  return adminUser;
};
export const getTeacherFromDB = async (id) => {
  const adminUser = await User.find({ email: id });

  return adminUser;
};

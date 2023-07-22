import { IUser } from "./user.interface";
import { User } from "./user.model";

export const createUserToDB = async (payload: IUser): Promise<IUser> => {
  const user = new User(payload);
  await user.save();
  console.log(user);
  return user;
};

export const getAllUsersFromDB = async (): Promise<IUser[]> => {
  const allUsers = await User.find({});
  console.log(allUsers);
  return allUsers;
};

export const getAdminFromDB = async (id) => {
  console.log(id);
  const adminUser = await User.find({ email: id });
  console.log(adminUser);
  return adminUser;
};
export const getTeacherFromDB = async (id) => {
  console.log(id);
  const adminUser = await User.find({ email: id });
  console.log(adminUser);
  return adminUser;
};

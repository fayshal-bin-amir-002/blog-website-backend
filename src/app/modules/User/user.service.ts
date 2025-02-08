import { TUser } from "./user.interface";
import { User } from "./user.model";

const createUser = async (payload: TUser) => {
  const user = await User.isUserExists(payload?.email);
  if (user) {
    throw new Error("User already registered. Please login.");
  }
  const result = await User.create(payload);

  return result;
};

export const UserServices = {
  createUser,
};

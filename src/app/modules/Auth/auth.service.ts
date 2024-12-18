import AppError from "../../errors/AppError";
import { TRegisterUser } from "./auth.interface";
import { User } from "./auth.model";
import httpStatus from "http-status";

const registerUserIntoDb = async (userData: TRegisterUser) => {
  const isUserExists = await User.isUserExists(userData?.email);
  if (isUserExists) {
    throw new AppError(httpStatus.BAD_REQUEST, "User already registered!");
  }
  const result = await User.create(userData);
  return result;
};

export const UserServices = {
  registerUserIntoDb,
};

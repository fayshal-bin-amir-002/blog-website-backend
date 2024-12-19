import AppError from "../../errors/AppError";
import { TLoginUser } from "./auth.interface";
import httpStatus from "http-status";
import { createToken } from "./auth.utils";
import config from "../../config";
import { User } from "../User/user.model";
import { TUser } from "../User/user.interface";

const registerUserIntoDb = async (userData: TUser) => {
  const result = await User.create(userData);
  return result;
};

const loginUser = async (payload: TLoginUser) => {
  const user = await User.isUserExists(payload?.email);

  if (!user) {
    throw new AppError(401, "Invalid credentials");
  }

  if (user?.isBlocked) {
    throw new AppError(httpStatus.FORBIDDEN, "This user is blocked!");
  }

  if (!(await User.isPasswordMatched(payload?.password, user?.password))) {
    throw new AppError(401, "Invalid credentials");
  }

  const jwtPayload = {
    email: user.email as string,
    role: user.role as string,
  };

  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expires_in as string,
  );

  return {
    token: accessToken,
  };
};

export const UserServices = {
  registerUserIntoDb,
  loginUser,
};

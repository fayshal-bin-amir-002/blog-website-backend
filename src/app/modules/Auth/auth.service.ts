import AppError from "../../errors/AppError";
import { TLoginUser } from "./auth.interface";
import httpStatus from "http-status";
import { createToken } from "./auth.utils";
import config from "../../config";
import { User } from "../User/user.model";

const loginUser = async (payload: TLoginUser) => {
  const user = await User.isUserExists(payload?.email);

  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, "Please register your account");
  }

  if (user?.isBlocked) {
    throw new AppError(httpStatus.BAD_REQUEST, "This user is blocked!");
  }

  if (!(await User.isPasswordMatched(payload?.password, user?.password))) {
    throw new AppError(httpStatus.BAD_REQUEST, "Invalid credentials");
  }

  const jwtPayload = {
    email: user.email as string,
    role: user.role as string,
  };

  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expires_in as string
  );

  return accessToken;
};

export const AuthServices = {
  loginUser,
};

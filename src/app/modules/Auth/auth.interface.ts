import { Model } from "mongoose";

export type TRegisterUser = {
  name: string;
  email: string;
  password: string;
  role?: "admin" | "user";
  isBlocked?: boolean;
};

export type TLoginUser = {
  email: string;
  password: string;
};

export interface TRegisterUserModel extends Model<TRegisterUser> {
  isUserExists(email: string): Promise<TRegisterUser>;
  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string,
  ): Promise<boolean>;
}

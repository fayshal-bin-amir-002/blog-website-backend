import { Model } from "mongoose";

export type TRegisterUser = {
  name: string;
  email: string;
  password: string;
  role?: "admin" | "user";
  isBlocked?: boolean;
};

export type TLoginUser = {
  name: string;
  email: string;
};

export interface TRegisterUserModel extends Model<TRegisterUser> {
  isUserExists(email: string): boolean;
}

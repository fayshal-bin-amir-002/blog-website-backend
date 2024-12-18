import { Model, Types } from "mongoose";

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
  findUserId(email: string): Promise<Types.ObjectId | undefined | null>;
  findUserById(
    id: Types.ObjectId | undefined,
  ): Promise<TRegisterUser | undefined | null>;
  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string,
  ): Promise<boolean>;
}

export type TUserRole = "user" | "admin";

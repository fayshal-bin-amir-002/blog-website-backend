import { Model, Types } from "mongoose";

export type TUserRole = "visitor" | "admin";

export type TUser = {
  name: string;
  email: string;
  image?: string;
  password: string;
  role?: TUserRole;
  isBlocked?: boolean;
};

export interface TUserModel extends Model<TUser> {
  isUserExists(email: string): Promise<TUser>;
  findUserId(email: string): Promise<Types.ObjectId | undefined | null>;
  findUserById(id: string | undefined): Promise<TUser | undefined | null>;
  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string
  ): Promise<boolean>;
}

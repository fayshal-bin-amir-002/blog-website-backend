import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import config from "../../config";
import AppError from "../../errors/AppError";
import httpStatus from "http-status";
import { TUser, TUserModel } from "./user.interface";

const UserSchema: Schema = new Schema<TUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, select: 0 },
    role: { type: String, enum: ["admin", "user"], default: "user" },
    isBlocked: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  },
);

UserSchema.set("toJSON", {
  transform: (doc, ret) => {
    return {
      _id: ret._id,
      name: ret.name,
      email: ret.email,
    };
  },
});

// statics for check that the user is already exists or not
UserSchema.statics.isUserExists = async function (email: string) {
  const user = await User.findOne({ email }).select("+password");
  return user;
};

UserSchema.statics.findUserId = async function (email: string) {
  const user = await User.findOne({ email });
  return user?._id || undefined;
};

UserSchema.statics.findUserById = async function (id: string) {
  const user = await User.findById(id);
  return user || undefined;
};

UserSchema.statics.isPasswordMatched = async function (
  plainTextPassword,
  hashedPassword,
) {
  return await bcrypt.compare(plainTextPassword, hashedPassword);
};

// pre hook for hash the password before save into the db
UserSchema.pre("save", async function (next) {
  // first checking the user is exists or not
  const user = await User.findOne({ email: this.email });
  // if exists then throw the error
  if (user) {
    throw new AppError(httpStatus.BAD_REQUEST, "User already registered!");
  }
  this.password = await bcrypt.hash(
    this.password as string,
    Number(config.bycrypt_salt_round),
  );
  next();
});

export const User = mongoose.model<TUser, TUserModel>("User", UserSchema);

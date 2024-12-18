import mongoose, { Schema } from "mongoose";
import { TRegisterUser, TRegisterUserModel } from "./auth.interface";
import bcrypt from "bcrypt";
import config from "../../config";
import AppError from "../../errors/AppError";
import httpStatus from "http-status";

const UserSchema: Schema = new Schema<TRegisterUser>(
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

export const User = mongoose.model<TRegisterUser, TRegisterUserModel>(
  "User",
  UserSchema,
);

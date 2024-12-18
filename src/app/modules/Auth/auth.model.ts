import mongoose, { Schema } from "mongoose";
import { TRegisterUser, TRegisterUserModel } from "./auth.interface";
import bcrypt from "bcrypt";
import config from "../../config";

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
  const user = await User.findOne({ email });
  return user ? true : false;
};

// pre hook for hash the password before save into the db
UserSchema.pre("save", async function (next) {
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

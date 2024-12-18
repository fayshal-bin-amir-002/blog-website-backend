import mongoose, { Schema } from "mongoose";
import { TUser } from "./user.interface";

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

export const User = mongoose.model<TUser>("User", UserSchema);

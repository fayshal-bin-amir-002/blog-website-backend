import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { User } from "../User/user.model";
import Blog from "../Blog/blog.model";

const blockUser = async (id: string) => {
  const user = await User.findUserById(id);
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, "User not found!");
  }
  if (user?.isBlocked) {
    throw new AppError(httpStatus.BAD_REQUEST, "User is already blocked!");
  }
  await User.findByIdAndUpdate(id, { isBlocked: true }, { new: true });
};

const deleteBlogByAdmin = async (id: string) => {
  const blog = await Blog.isBlogExists(id);
  if (!blog) {
    throw new AppError(httpStatus.NOT_FOUND, "Blog not found!");
  }

  await Blog.findByIdAndDelete(id);
};

export const AdminServices = {
  blockUser,
  deleteBlogByAdmin,
};

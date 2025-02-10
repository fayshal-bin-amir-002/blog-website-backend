import QueryBuilder from "../../builder/QueryBuilder";
import AppError from "../../errors/AppError";
import { User } from "../User/user.model";
import { TBlog } from "./blog.interface";
import Blog from "./blog.model";
import httpStatus from "http-status";

const createBlogIntoDb = async (payload: TBlog, email: string) => {
  const user = await User.findById("67a75a2490264fcbf6fabc0a");
  const id = user?.id;
  // const user = await User.isUserExists(email);
  // if (!id) {
  //   throw new AppError(httpStatus.NOT_FOUND, "User not found!");
  // }
  // if (user && user.isBlocked) {
  //   throw new AppError(httpStatus.BAD_REQUEST, "User is blocked!");
  // }
  // if (user?.email !== email) {
  //   throw new AppError(httpStatus.UNAUTHORIZED, "Unauthorized access!");
  // }
  payload["author"] = id;
  const result = (await Blog.create(payload)).populate("author");
  return result;
};

const updateBlog = async (payload: TBlog, _id: string, email: string) => {
  const blog = await Blog.isBlogExists(_id);
  if (!blog) {
    throw new AppError(httpStatus.NOT_FOUND, "Blog not found!");
  }

  // const authorId = blog.author?.toString();

  // const user = await User.findUserById(authorId);

  // if (user && user.isBlocked) {
  //   throw new AppError(httpStatus.BAD_REQUEST, "User is blocked!");
  // }

  // if (user?.email !== email) {
  //   throw new AppError(httpStatus.UNAUTHORIZED, "Unauthorized access!");
  // }

  const result = await Blog.findByIdAndUpdate(
    _id,
    { ...payload },
    {
      new: true,
    }
  ).populate("author");
  return result;
};

const deleteBlogFromDb = async (_id: string, email: string) => {
  // const blog = await Blog.isBlogExists(_id);
  // if (!blog) {
  //   throw new AppError(httpStatus.NOT_FOUND, "Blog not found!");
  // }

  // const authorId = blog.author?.toString();

  // const user = await User.findUserById(authorId);

  // if (user && user.isBlocked) {
  //   throw new AppError(httpStatus.BAD_REQUEST, "User is blocked!");
  // }

  // if (user?.email !== email) {
  //   throw new AppError(httpStatus.UNAUTHORIZED, "Unauthorized access!");
  // }

  await Blog.findByIdAndDelete(_id);
};

const getAllBlogsFromDb = async (query: Record<string, unknown>) => {
  const blogQuery = new QueryBuilder(Blog.find(), query)
    .search()
    .filter()
    .sort();
  const result = await blogQuery.modelQuery.populate("author");
  return result;
};

const getABlog = async (id: string) => {
  const result = await Blog.findById(id).populate("author");
  return result;
};

export const BlogServices = {
  createBlogIntoDb,
  updateBlog,
  deleteBlogFromDb,
  getAllBlogsFromDb,
  getABlog,
};

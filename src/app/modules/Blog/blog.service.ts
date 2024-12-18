import { User } from "../Auth/auth.model";
import { TBlog } from "./blog.interface";
import Blog from "./blog.model";

const createBlogIntoDb = async (payload: TBlog, email: string) => {
  const user = await User.isUserExists(email);
  payload.author = user?._id;
  const result = (await Blog.create(payload)).populate("author");
  return result;
};

export const BlogServices = {
  createBlogIntoDb,
};

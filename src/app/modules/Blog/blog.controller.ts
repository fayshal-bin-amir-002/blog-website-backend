import { RequestHandler } from "express";
import catchAsync from "../../utils/catchAsync";
import { BlogServices } from "./blog.service";
import sendResponse from "../../utils/sendResponse";

const createBlog: RequestHandler = catchAsync(async (req, res) => {
  const userEmail = req?.user?.email;
  const result = await BlogServices.createBlogIntoDb(req.body, userEmail);
  sendResponse(res, {
    success: true,
    message: "Blog created successfully",
    statusCode: 201,
    data: result,
  });
});

const updateBlog: RequestHandler = catchAsync(async (req, res) => {
  const id = req?.params?.id;
  const email = req?.user?.email;
  const result = await BlogServices.updateBlog(req.body, id, email);
  sendResponse(res, {
    success: true,
    message: "Blog updated successfully",
    statusCode: 200,
    data: result,
  });
});

const deleteBlog: RequestHandler = catchAsync(async (req, res) => {
  const id = req?.params?.id;
  const email = req?.user?.email;
  const result = await BlogServices.deleteBlogFromDb(id, email);
  sendResponse(res, {
    success: true,
    message: "Blog deleted successfully",
    statusCode: 200,
    data: result,
  });
});

const getAllBlogs: RequestHandler = catchAsync(async (req, res) => {
  const result = await BlogServices.getAllBlogsFromDb(req?.query);
  sendResponse(res, {
    success: true,
    message: "Blogs fetched successfully",
    statusCode: 200,
    data: result,
  });
});

export const BlogController = {
  createBlog,
  updateBlog,
  deleteBlog,
  getAllBlogs,
};

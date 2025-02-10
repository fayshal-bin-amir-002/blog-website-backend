import { RequestHandler } from "express";
import catchAsync from "../../utils/catchAsync";
import { BlogServices } from "./blog.service";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";

const createBlog: RequestHandler = catchAsync(async (req, res) => {
  const userEmail = req?.user?.email;
  const result = await BlogServices.createBlogIntoDb(req.body, userEmail);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Blog created successfully",
    data: result,
  });
});

const updateBlog: RequestHandler = catchAsync(async (req, res) => {
  const id = req?.params?.id;
  const email = req?.user?.email;
  const result = await BlogServices.updateBlog(req.body, id, email);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Blog updated successfully",
    data: result,
  });
});

const deleteBlog: RequestHandler = catchAsync(async (req, res) => {
  const id = req?.params?.id;
  const email = req?.user?.email;
  await BlogServices.deleteBlogFromDb(id, email);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Blog deleted successfully",
  });
});

const getAllBlogs: RequestHandler = catchAsync(async (req, res) => {
  const result = await BlogServices.getAllBlogsFromDb(req?.query);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Blogs fetched successfully",
    data: result,
  });
});

const getABlog = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await BlogServices.getABlog(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Blog fetched successfully",
    data: result,
  });
});

export const BlogController = {
  createBlog,
  updateBlog,
  deleteBlog,
  getAllBlogs,
  getABlog,
};

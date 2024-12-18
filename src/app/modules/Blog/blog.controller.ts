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

export const BlogController = {
  createBlog,
};

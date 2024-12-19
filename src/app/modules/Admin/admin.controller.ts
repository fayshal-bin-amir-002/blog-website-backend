import { RequestHandler } from "express";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { AdminServices } from "./admin.service";

const blockUser: RequestHandler = catchAsync(async (req, res) => {
  const result = await AdminServices.blockUser(req.params.id);
  sendResponse(res, {
    success: true,
    message: "User blocked successfully",
    statusCode: 200,
    data: result,
  });
});

const deleteBlog: RequestHandler = catchAsync(async (req, res) => {
  const id = req?.params?.id;
  const result = await AdminServices.deleteBlogByAdmin(id);
  sendResponse(res, {
    success: true,
    message: "Blog deleted successfully",
    statusCode: 200,
    data: result,
  });
});

export const AdminControllers = {
  blockUser,
  deleteBlog,
};

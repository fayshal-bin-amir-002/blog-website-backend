import { RequestHandler } from "express";
import catchAsync from "../../utils/catchAsync";
import { UserServices } from "./auth.service";
import sendResponse from "../../utils/sendResponse";

const registerUser: RequestHandler = catchAsync(async (req, res) => {
  const result = await UserServices.registerUserIntoDb(req.body);
  sendResponse(res, {
    success: true,
    message: "User registered successfully.",
    statusCode: 200,
    data: result,
  });
});

export const UserControllers = {
  registerUser,
};

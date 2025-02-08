import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { ContactServices } from "./contact.service";
import httpStatus from "http-status";

const createContactMessage = catchAsync(async (req, res) => {
  await ContactServices.createContactMessage(req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Contact form submitted successfully",
  });
});

const getAllContactMessages = catchAsync(async (req, res) => {
  const result = await ContactServices.getAllContactMessages();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Contact messages retrieved successfully",
    data: result,
  });
});

export const ContactControllers = {
  createContactMessage,
  getAllContactMessages,
};

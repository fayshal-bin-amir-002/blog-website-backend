import express from "express";
import validateRequest from "../../middleware/validateRequest";
import { contactValidationSchema } from "./contact.validation";
import { ContactControllers } from "./contact.controller";

const router = express.Router();

router.post(
  "/",
  validateRequest(contactValidationSchema),
  ContactControllers.createContactMessage
);

router.get("/", ContactControllers.getAllContactMessages);

export const ContactRoutes = router;

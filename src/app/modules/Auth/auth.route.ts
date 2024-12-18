import express from "express";
import { UserControllers } from "./auth.controller";
import validateRequest from "../../middleware/validateRequest";
import { RegisterUserValidationSchema } from "./auth.validation";

const router = express.Router();

router.post(
  "/register",
  validateRequest(RegisterUserValidationSchema),
  UserControllers.registerUser,
);

export const AuthRoutes = router;

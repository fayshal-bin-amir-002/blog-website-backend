import express from "express";
import { UserControllers } from "./auth.controller";
import validateRequest from "../../middleware/validateRequest";
import {
  LoginUserValidationSchema,
  RegisterUserValidationSchema,
} from "./auth.validation";

const router = express.Router();

router.post(
  "/register",
  validateRequest(RegisterUserValidationSchema),
  UserControllers.registerUser,
);

router.post(
  "/login",
  validateRequest(LoginUserValidationSchema),
  UserControllers.loginUser,
);

export const AuthRoutes = router;

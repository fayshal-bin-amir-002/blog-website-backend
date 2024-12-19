import express from "express";
import { UserControllers } from "./auth.controller";
import validateRequest from "../../middleware/validateRequest";
import { LoginUserValidationSchema } from "./auth.validation";
import { UserValidationSchema } from "../User/user.validation";

const router = express.Router();

router.post(
  "/register",
  validateRequest(UserValidationSchema),
  UserControllers.registerUser
);

router.post(
  "/login",
  validateRequest(LoginUserValidationSchema),
  UserControllers.loginUser
);

export const AuthRoutes = router;

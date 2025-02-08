import express from "express";
import validateRequest from "../../middleware/validateRequest";
import { LoginUserValidationSchema } from "./auth.validation";
import { AuthControllers } from "./auth.controller";

const router = express.Router();

router.post(
  "/login",
  validateRequest(LoginUserValidationSchema),
  AuthControllers.loginUser
);

export const AuthRoutes = router;

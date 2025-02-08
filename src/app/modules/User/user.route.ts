import express from "express";
import { UserControllers } from "./user.controller";
import validateRequest from "../../middleware/validateRequest";
import { UserValidationSchema } from "./user.validation";

const router = express.Router();

router.post(
  "/register",
  validateRequest(UserValidationSchema),
  UserControllers.createUser
);

export const UserRoutes = router;

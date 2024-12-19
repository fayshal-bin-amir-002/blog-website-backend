import express from "express";
import auth from "../../middleware/auth";
import { AdminControllers } from "./admin.controller";

const router = express.Router();

router.patch("/users/:id/block", auth("admin"), AdminControllers.blockUser);

router.delete("/blogs/:id", auth("admin"), AdminControllers.deleteBlog);

export const AdminRoutes = router;

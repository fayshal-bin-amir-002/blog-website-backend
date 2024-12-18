import express from "express";
import validateRequest from "../../middleware/validateRequest";
import { BlogValidationSchema } from "./blog.validation";
import { BlogController } from "./blog.controller";
import auth from "../../middleware/auth";

const router = express.Router();

router.post(
  "/",
  validateRequest(BlogValidationSchema.createBlogValidationSchema),
  auth("user"),
  BlogController.createBlog,
);

router.patch(
  "/:id",
  validateRequest(BlogValidationSchema.updateBlogValidationSchema),
  auth("user"),
  BlogController.updateBlog,
);

router.delete("/:id", auth("user"), BlogController.deleteBlog);

export const BlogRoutes = router;

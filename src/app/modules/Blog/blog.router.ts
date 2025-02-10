import express from "express";
import validateRequest from "../../middleware/validateRequest";
import { BlogValidationSchema } from "./blog.validation";
import { BlogController } from "./blog.controller";

const router = express.Router();

router.post(
  "/",
  validateRequest(BlogValidationSchema.createBlogValidationSchema),

  BlogController.createBlog
);

router.patch(
  "/:id",
  validateRequest(BlogValidationSchema.updateBlogValidationSchema),

  BlogController.updateBlog
);

router.delete("/:id", BlogController.deleteBlog);

router.get("/", BlogController.getAllBlogs);

router.get("/:id", BlogController.getABlog);

export const BlogRoutes = router;

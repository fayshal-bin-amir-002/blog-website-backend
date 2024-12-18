import { z } from "zod";
import { Types } from "mongoose";

export const createBlogValidationSchema = z.object({
  body: z.object({
    title: z.string().min(1, { message: "Title is required" }),
    content: z.string().min(1, { message: "Content is required" }),
    author: z
      .instanceof(Types.ObjectId, {
        message: "Author must be a valid ObjectId",
      })
      .optional(),
    isPublished: z.boolean().optional().default(true),
  }),
});

export const updateBlogValidationSchema = z.object({
  body: z.object({
    title: z.string().min(1, { message: "Title is required" }),
    content: z.string().min(1, { message: "Content is required" }),
  }),
});

export const BlogValidationSchema = {
  createBlogValidationSchema,
  updateBlogValidationSchema,
};

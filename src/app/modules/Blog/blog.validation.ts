import { z } from "zod";
import { Types } from "mongoose";

export const createBlogValidationSchema = z.object({
  body: z.object({
    title: z.string().min(1, { message: "Title is required" }),
    image: z.string().min(1, { message: "Image is required" }),
    description: z.string().min(1, { message: "Description is required" }),
    content: z.string().min(1, { message: "Content is required" }),
    author: z
      .union([
        z.instanceof(Types.ObjectId, {
          message: "Author must be a valid ObjectId",
        }),
        z.null(),
      ])
      .optional(),
    isPublished: z.boolean().optional().default(true),
  }),
});

export const updateBlogValidationSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    content: z.string().optional(),
  }),
});

export const BlogValidationSchema = {
  createBlogValidationSchema,
  updateBlogValidationSchema,
};

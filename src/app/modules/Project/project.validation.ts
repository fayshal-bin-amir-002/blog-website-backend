import { z } from "zod";

export const projectValidationSchema = z.object({
  body: z.object({
    title: z.string().min(3, "Title must be at least 3 characters long"),
    image: z.string().url("Image must be a valid URL"),
    technologies: z.array(
      z.string().min(1, "Technology name must not be empty")
    ),
    features: z.array(
      z.string().min(1, "Feature description must not be empty")
    ),
    description: z
      .string()
      .min(10, "Description must be at least 10 characters long"),
    isFeatured: z.boolean(),
    live_link: z.string().url("Live link must be a valid URL"),
    github_link: z.string().optional(),
    github_link_frontEnd: z.string().optional(),
    github_link_backEnd: z.string().optional(),
  }),
});

export const updateProjectValidationSchema = z.object({
  body: z.object({
    title: z
      .string()
      .min(3, "Title must be at least 3 characters long")
      .optional(),
    image: z.string().url("Image must be a valid URL").optional(),
    technologies: z
      .array(z.string().min(1, "Technology name must not be empty"))
      .optional(),
    features: z
      .array(z.string().min(1, "Feature description must not be empty"))
      .optional(),
    description: z
      .string()
      .min(10, "Description must be at least 10 characters long")
      .optional(),
    isFeatured: z.boolean().optional(),
    live_link: z.string().url("Live link must be a valid URL").optional(),
    github_link: z.string().optional(),
    github_link_frontEnd: z.string().optional(),
    github_link_backEnd: z.string().optional(),
  }),
});

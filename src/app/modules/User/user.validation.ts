import { z } from "zod";

export const UserValidationSchema = z.object({
  body: z.object({
    name: z.string().trim().min(1, { message: "Name is required" }),
    image: z.string().trim().optional().default(""),

    email: z
      .string()
      .trim()
      .email({ message: "Invalid email address." })
      .min(1, { message: "Email is required!" }),

    password: z.string().trim().min(1, { message: "Password is required!" }),

    role: z
      .enum(["admin", "visitor"], {
        errorMap: () => ({ message: "Invalid role" }),
      })
      .optional()
      .default("visitor"),

    isBlocked: z.boolean().optional().default(false),
  }),
});

import { Types } from "mongoose";
import { z } from "zod";

export const RegisterUserValidationSchema = z.object({
  body: z.object({
    name: z
      .string()
      .trim()
      .min(1, { message: "Name is required and cannot be empty." }),

    email: z
      .string()
      .trim()
      .email({ message: "Invalid email address." })
      .min(1, { message: "Email is required!" }),

    password: z.string().trim().min(1, { message: "Password is required!" }),

    role: z
      .enum(["admin", "user"], {
        errorMap: () => ({ message: "Role must be either 'admin' or 'user'." }),
      })
      .optional()
      .default("user"),

    isBlocked: z.boolean().optional().default(false),
  }),
});

export const LoginUserValidationSchema = z.object({
  body: z.object({
    email: z
      .string()
      .trim()
      .email({ message: "Invalid email address." })
      .min(1, { message: "Email is required!" }),

    password: z.string().trim().min(1, { message: "Password is required!" }),
  }),
});

import { z } from "zod";

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

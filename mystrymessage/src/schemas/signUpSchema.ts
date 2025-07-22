import { z } from "zod";

export const usernameValidation = z
    .string()
    .min(2, "Username must be atleat 2 characters")
    .max(20, "Username must be no more than 20 characters")
    .regex(/^[a-zA-z0-9_]+$/, "Username must not contain special character")


export const signUpSchema = z.object({
    username: usernameValidation,
    email: z.string().email({ message: "Invalid email Address" }),
    password: z.string().min(6, { message: "Password must be at least 6 character" })
    
})
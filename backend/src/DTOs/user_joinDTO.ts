import { z } from 'nestjs-zod/z';

export const userJoinZ = z
  .object({
    name: z.string().max(200),
    email: z.string().email().max(200),
    password: z.string().max(120),
  })
  .refine((data) => Object.keys(data).length === 3, {
    message: 'All fields (name, email, password) are required',
  });

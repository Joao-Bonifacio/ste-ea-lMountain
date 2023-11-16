import { z } from 'nestjs-zod/z';

export const userLoginZ = z
  .object({
    email: z.string().email().max(200),
    password: z.string().max(120),
  })
  .refine((data) => Object.keys(data).length === 2, {
    message: 'All fields (name, email, password) are required',
  })
  .refine(
    (data) => {
      const allowedFields = ['name', 'password'];
      const receivedFields = Object.keys(data);
      const invalidFields = receivedFields.filter(
        (field) => !allowedFields.includes(field),
      );
      if (invalidFields.length > 0) {
        throw new Error(`Invalid fields: ${invalidFields.join(', ')}`);
      }
      return true;
    },
    { message: 'Invalid fields provided' },
  );

export const userJoinZ = z
  .object({
    name: z.string().max(200),
    email: z.string().email().max(200),
    password: z.string().max(120),
  })
  .refine((data) => Object.keys(data).length === 3, {
    message: 'All fields (name, email, password) are required',
  })
  .refine(
    (data) => {
      const allowedFields = ['name', 'email', 'password'];
      const receivedFields = Object.keys(data);
      const invalidFields = receivedFields.filter(
        (field) => !allowedFields.includes(field),
      );
      if (invalidFields.length > 0) {
        throw new Error(`Invalid fields: ${invalidFields.join(', ')}`);
      }
      return true;
    },
    { message: 'Invalid fields provided' },
  );

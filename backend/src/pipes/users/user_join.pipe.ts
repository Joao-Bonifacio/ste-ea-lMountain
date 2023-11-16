import {
  HttpException,
  HttpStatus,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { z, ZodError } from 'nestjs-zod/z';

const userJoinZ = z
  .object({
    name: z.string().max(120),
    email: z.string().email().max(120),
    password: z.string().max(120),
  })
  .refine((data) => Object.keys(data).length === 3, {
    message: 'All fields (name, email, password) are required',
  });

@Injectable()
export class UsersJoinPipe implements PipeTransform {
  transform(value: any) {
    try {
      const validate = userJoinZ.parse(value);
      return validate;
    } catch (error) {
      if (error instanceof ZodError) {
        throw new HttpException('Invalid data', HttpStatus.BAD_REQUEST);
      }
    }
  }
}

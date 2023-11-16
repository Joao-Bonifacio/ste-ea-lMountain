import {
  HttpException,
  HttpStatus,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { ZodError } from 'nestjs-zod/z';
import { userJoinZ } from 'src/DTOs/user_joinDTO';

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

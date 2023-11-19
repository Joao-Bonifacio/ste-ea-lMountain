import {
  HttpException,
  HttpStatus,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { ZodError } from 'nestjs-zod/z';
import { userLoginZ, userJoinZ } from 'src/types/userDTO';

@Injectable()
export class UserLoginPipe implements PipeTransform {
  transform(value: any) {
    try {
      const validate = userLoginZ.parse(value);
      return validate;
    } catch (error) {
      if (error instanceof ZodError) {
        throw new HttpException(error.errors, HttpStatus.BAD_REQUEST);
      }
    }
  }
}

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

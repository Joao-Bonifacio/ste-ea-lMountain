import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { AuthServiceJWT } from 'src/auth/auth.service';

@Injectable()
export class JwtGuard implements CanActivate {
  constructor(private jwt: AuthServiceJWT) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest().headers;
    const token = JSON.parse(request.token).value;
    if (!token) {
      return false;
    }
    const verify = await this.jwt.verifyToken(token);
    if (!verify) {
      return false;
    }
    return true;
  }
}

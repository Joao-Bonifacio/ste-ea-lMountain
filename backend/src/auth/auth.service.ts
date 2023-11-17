import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthServiceJWT {
  constructor(private jwt: JwtService) {}
  private readonly secretKey = process.env.KEY_JWT;

  async genToken(payload: any): Promise<string> {
    const token = await this.jwt.signAsync(payload, {
      secret: this.secretKey,
    });
    return token;
  }
  async verifyToken(token: string): Promise<any> {
    try {
      const verify = await this.jwt.verify(token, {
        secret: this.secretKey,
      });
      return verify;
    } catch (error) {
      throw new UnauthorizedException('Invalid token');
    }
  }
}

import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { IRequest, myUser } from './type';
import { JwtService } from '@nestjs/jwt/dist';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  constructor(private readonly jwtService: JwtService) {}
  use(req: IRequest, res: Response, next: NextFunction) {
    const header = req.headers['auth1'];
    if (!header) {
      res.status(402).send('Access denied1');
    }
    try {
      const decode: any = this.jwtService.decode(header.toString());
      const usercheck = decode as myUser;
      console.log('my code ' + usercheck.id);
      req.userData = usercheck;
    } catch (e) {
      res.send('Error');
    }

    next();
  }
}

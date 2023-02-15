import { Request } from 'express';

export interface myUser {
  id: string;
  email: string;
  password: string;
}

export interface IRequest extends Request {
  userData: myUser;
}

import { Controller, Get } from '@nestjs/common';
import { UserService } from './user-service/user-service';


@Controller("/user")
export class user {

    constructor(private readonly userService:UserService){}

    @Get()
    findAll():any{
        return this.userService.getall();
    }

}
import { Controller, Get } from '@nestjs/common';


@Controller("/user")
export class user {

    @Get()
    findAll():any{
        return [];
    }

}
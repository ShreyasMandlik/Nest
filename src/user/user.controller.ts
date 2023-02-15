import { Controller, Get } from '@nestjs/common';
import { UserStrore } from 'src/store/user-strore/user-strore';


@Controller("/user")
export class user {

    

    @Get()
    findAll():any{
        return ;
    }

}
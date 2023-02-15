import { Body, Controller, Post } from '@nestjs/common';
import { Auth } from './auth';
import { authDto } from './authDTO';

@Controller('/auth')
export class AuthController {

    constructor(private readonly authService:Auth){
        
    }

   @Post("/signup")
    sigup(@Body() authdata:authDto):any {
        return this.authService.saveuser(authdata); 
   }
}

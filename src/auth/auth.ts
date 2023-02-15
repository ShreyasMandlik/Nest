import { Injectable } from '@nestjs/common';
import { authDto } from './authDTO';

@Injectable()
export class Auth {
    saveuser(authdata:authDto){
        return {msg:"Success"};
    }
}

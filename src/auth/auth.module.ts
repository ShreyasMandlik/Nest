import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { Auth } from './auth';
import { JwtModule } from '@nestjs/jwt';



@Module({
  controllers: [AuthController],
  providers: [Auth],
  imports: [
    JwtModule.register({
      secret: 'secret',
    }),
  ],
})
export class AuthModule  {

}

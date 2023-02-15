import { Module } from '@nestjs/common';
import { userModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { StoreModule } from './store/store.module';


@Module({
  imports: [userModule, AuthModule, StoreModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { userModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { StoreModule } from './store/store.module';
import { BookmarkModule } from './bookmark/bookmark.module';


@Module({
  imports: [userModule, AuthModule, StoreModule, BookmarkModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

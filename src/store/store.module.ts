import { Global, Module } from '@nestjs/common';
import { UserStrore } from './user-strore/user-strore';
import { BookmarkStore } from './bookmark-store/bookmark-store';
@Global()
@Module({
  providers: [UserStrore, BookmarkStore],
  exports: [UserStrore, BookmarkStore],
})
export class StoreModule {}

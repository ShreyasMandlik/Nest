import { Module } from '@nestjs/common';
import { UserStrore } from './user-strore/user-strore';

@Module({
  providers: [UserStrore]
})
export class StoreModule {}

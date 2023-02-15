import { Global, Module } from '@nestjs/common';
import { UserStrore } from './user-strore/user-strore';
@Global()
@Module({
  providers: [UserStrore],
  exports : [UserStrore]
})
export class StoreModule {}

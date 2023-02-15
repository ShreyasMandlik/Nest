import { Module } from '@nestjs/common';
import { user } from './user.controller';

@Module({
  imports: [],
 
controllers: [user],
  providers: [],
})
export class userModule {}

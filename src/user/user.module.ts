import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserService } from './user.service';

@Module({
  providers: [UserService],
  imports: [ConfigModule, HttpModule],
  exports: [UserService],
})
export class UserModule {}

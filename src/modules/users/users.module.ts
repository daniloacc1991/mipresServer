import { Module } from '@nestjs/common';
import { UsersService } from './service/users.service';
import { modulesProviders } from 'src/providers/modules-providers';
import { UsersController } from './controller/users.controller';

@Module({
  providers: [
    ...modulesProviders,
    UsersService,
  ],
  controllers: [UsersController],
})
export class UsersModule {}

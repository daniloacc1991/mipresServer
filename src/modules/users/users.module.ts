import { Module } from '@nestjs/common';
import { UsersService } from './service/users.service';
import { modulesProviders } from 'src/providers/modules-providers';
import { UsersController } from './controller/users.controller';
import { UsersGateway } from './gateway/users.gateway';

@Module({
  providers: [
    ...modulesProviders,
    UsersService,
    UsersGateway,
  ],
  controllers: [UsersController],
})
export class UsersModule {}

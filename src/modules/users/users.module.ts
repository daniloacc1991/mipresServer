import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { UsersService } from './service/users.service';
import { modulesProviders } from '../../providers/modules-providers';
import { UsersController } from './controller/users.controller';
import { UsersGateway } from './gateway/users.gateway';
import { DatabaseModule } from '../../database/database.module';
import { AuthService } from './service/auth.service';
import { JwtStrategy } from './service/jwt.strategy';
import { AuthController } from './controller/auth.controller';

@Module({
  imports: [
    DatabaseModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secretOrPrivateKey: 'b8ee5150-bf69-40d2-89b8-c9cc1cfc1ea4',
    }),
  ],
  providers: [
    ...modulesProviders,
    AuthService,
    JwtStrategy,
    UsersService,
    UsersGateway,
  ],
  controllers: [
    UsersController,
    AuthController,
  ],
})
export class UsersModule { }

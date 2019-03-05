import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { UsersService } from './service/users.service';
import { modulesProviders } from 'src/providers/modules-providers';
import { UsersController } from './controller/users.controller';
import { UsersGateway } from './gateway/users.gateway';
import { DatabaseModule } from 'src/database/database.module';
import { AuthService } from './service/auth.service';
import { JwtStrategy } from './service/jwt.strategy';
import { AuthController } from './controller/auth.controller';

@Module({
  imports: [
    DatabaseModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secretOrPrivateKey: 'secretKey',
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
export class UsersModule {}

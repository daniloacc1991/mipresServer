import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './controller/auth.controller';
import { AuthService } from './service/auth.service';
import { modulesProviders } from 'src/providers/modules-providers';
import { UsersService } from 'src/modules/users/service/users.service';
import { JwtStrategy } from './service/jwt.strategy';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [
    DatabaseModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secretOrPrivateKey: 'secretKey',
    }),
  ],
  providers: [
    AuthService,
    JwtStrategy,
    UsersService,
    ...modulesProviders,
  ],
  controllers: [AuthController],
})
export class AuthModule { }

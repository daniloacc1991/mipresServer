import { Module } from '@nestjs/common';
import { Cie10Controller } from './controllers/cie10.controller';
import { Cie10Service } from './services/cie10.service';
import { Cie10Gateway } from './gateway/cie10.gateway';
import { DatabaseModule } from 'src/database/database.module';
import { modulesProviders } from 'src/providers/modules-providers';

@Module({
  imports: [
    DatabaseModule,
  ],
  controllers: [Cie10Controller],
  providers: [
    ...modulesProviders,
    Cie10Service,
    Cie10Gateway,
  ],
})
export class Cie10Module { }

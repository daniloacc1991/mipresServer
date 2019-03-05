import { Module } from '@nestjs/common';
import { databaseProviders } from './database.provider';
import { modulesProviders } from 'src/providers/modules-providers';

@Module({
  providers: [
    ...databaseProviders,
    ...modulesProviders,
  ],
  exports: [
    ...databaseProviders,
    ...modulesProviders,
  ],
})
export class DatabaseModule { }

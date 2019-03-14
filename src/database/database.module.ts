import { Module } from '@nestjs/common';
import { databaseProviders } from './database.provider';
import { modulesProviders } from '../providers/modules-providers';

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

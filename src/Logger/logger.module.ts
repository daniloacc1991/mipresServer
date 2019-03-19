import { Module } from '@nestjs/common';
import { MyLogger } from './SaveLogger';

@Module({
  providers: [MyLogger],
  exports: [MyLogger],
})
export class LoggerModule { }

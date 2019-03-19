import { LoggerService, Logger } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import * as winston from 'winston';

// tslint:disable:no-console
const folderLogs = path.join(__dirname, '..', '..', 'logs');
const fileDebug = path.join(folderLogs, 'debug.log');
const fileError = path.join(folderLogs, 'error.log');
const fileInfo = path.join(folderLogs, 'info.log');

if (!(fs.existsSync(folderLogs))) {
  fs.mkdirSync(folderLogs);
}

try {
  fs.unlinkSync(fileInfo);
  fs.unlinkSync(fileDebug);
  fs.unlinkSync(fileError);
} catch (e) {
  console.log(e);
}

export let logggerWinston = winston.createLogger({
  exitOnError: false,
  transports: [
    new (winston.transports.File)({
      filename: fileInfo,
      handleExceptions: true,
      level: 'info',
      maxFiles: 5,
      maxsize: 5242880,
    }),
    new (winston.transports.File)({
      filename: fileError,
      handleExceptions: true,
      level: 'error',
      maxFiles: 5,
      maxsize: 5242880,
    }),
    new (winston.transports.File)({
      filename: fileDebug,
      handleExceptions: true,
      level: 'debug',
      maxFiles: 5,
      maxsize: 5242880,
    }),
  ],
});

export class MyLogger extends Logger {
  log(message: string, trace: string) {
    logggerWinston.info(message, trace);
    super.log(message, trace);
  }
  error(message: string, trace: string) {
    logggerWinston.error(message);
  }
  warn(message: string) {
    logggerWinston.warn(message);
  }
  debug(message: string) {
    logggerWinston.debug(message);
  }
  verbose(message: string) {
    logggerWinston.verbose(message);
  }
}

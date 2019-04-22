import { NestFactory } from '@nestjs/core';
import { ValidationPipe, Logger } from '@nestjs/common';
import * as rateLimit from 'express-rate-limit';
import * as helmet from 'helmet';
import * as dotenv from 'dotenv';
import { AppModule } from './app.module';
import { swaggerApp } from './swagger';
import { RedisIoAdapter } from './adapters/redis-io.adapters';
import { LoggingInterceptor } from './interceptors/logging.interceptor';
import { join } from 'path';
import { Settings } from 'luxon';

Settings.defaultZoneName = 'America/Bogota';

async function bootstrap() {
  dotenv.config();

  const port = process.env.PORT || 3000;
  const host = process.env.HOST || 'localhost';
  const app = await NestFactory.create(AppModule);

  // Engine Views
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('pug');

  // app.setGlobalPrefix('api');
  app.useWebSocketAdapter(new RedisIoAdapter(app));
  app.useGlobalInterceptors(new LoggingInterceptor());
  app.use(rateLimit({
    windowMs: 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
  }));
  app.use(helmet());
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  swaggerApp(app);
  await app.listen(port, host);
}
bootstrap();

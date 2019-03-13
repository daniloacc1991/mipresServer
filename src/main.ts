import { NestFactory } from '@nestjs/core';
import * as rateLimit from 'express-rate-limit';
import * as helmet from 'helmet';
import * as compression from 'compression';
import { AppModule } from './app.module';
import { swaggerApp } from './swagger';
import { ValidationPipe, Logger } from '@nestjs/common';
import * as dotenv from 'dotenv';

async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3000;
  Logger.log(port, 'PUERTO ESCUCHA');
  app.use(rateLimit({
    windowMs: 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
  }));
  app.use(helmet());
  app.enableCors();
  app.use(compression());
  app.useGlobalPipes(new ValidationPipe());
  swaggerApp(app);
  await app.listen(port);
}
bootstrap();

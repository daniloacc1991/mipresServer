import { NestFactory } from '@nestjs/core';
import * as rateLimit from 'express-rate-limit';
import * as helmet from 'helmet';
import * as compression from 'compression';
import { AppModule } from './app.module';
import { swaggerApp } from './swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
  }));
  app.use(helmet());
  app.enableCors();
  app.use(compression());
  swaggerApp(app);
  await app.listen(3000);
}
bootstrap();

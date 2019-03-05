import { Module } from '@nestjs/common';
import { PresentacionController } from './controllers/presentacion.controller';
import { PresentacionService } from './services/presentacion.service';
import { PresentacionGateway } from './gateway/presentacion.gateway';
import { modulesProviders } from 'src/providers/modules-providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [PresentacionController],
  providers: [
    ...modulesProviders,
    PresentacionService,
    PresentacionGateway,
  ],
})
export class PresentacionModule {}

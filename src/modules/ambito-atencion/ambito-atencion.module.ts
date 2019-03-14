import { Module } from '@nestjs/common';
import { AmbitoAtencionController } from './controller/ambito-atencion.controller';
import { AmbitoAtencionService } from './service/ambito-atencion.service';
import { modulesProviders } from '../../providers/modules-providers';
import { DatabaseModule } from '../../database/database.module';
import { AmbitoAtencionGateway } from './gateway/ambito-atencion.gateway';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...modulesProviders,
    AmbitoAtencionService,
    AmbitoAtencionGateway,
  ],
  controllers: [AmbitoAtencionController],
})
export class AmbitoAtencionModule { }

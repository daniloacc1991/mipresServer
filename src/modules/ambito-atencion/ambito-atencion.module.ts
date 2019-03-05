import { Module } from '@nestjs/common';
import { AmbitoAtencionController } from './controller/ambito-atencion.controller';
import { AmbitoAtencionService } from './service/ambito-atencion.service';
import { modulesProviders } from 'src/providers/modules-providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...modulesProviders,
    AmbitoAtencionService,
  ],
  controllers: [AmbitoAtencionController],
})
export class AmbitoAtencionModule { }

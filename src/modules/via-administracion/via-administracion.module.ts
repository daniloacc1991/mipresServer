import { Module } from '@nestjs/common';
import { ViaAdministracionService } from './services/via-administracion.service';
import { ViaAdministracionController } from './controllers/via-administracion.controller';
import { ViaAdministracionGateway } from './gateway/via-administracion.gateway';
import { DatabaseModule } from '../../database/database.module';
import { modulesProviders } from '../../providers/modules-providers';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...modulesProviders,
    ViaAdministracionService,
    ViaAdministracionGateway,
  ],
  controllers: [ViaAdministracionController],
})
export class ViaAdministracionModule {}

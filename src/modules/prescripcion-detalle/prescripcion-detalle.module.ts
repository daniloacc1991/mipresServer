import { Module } from '@nestjs/common';
import { PrescripcionDetalleGateway } from './gateway/prescripcion-detalle.gateway';
import { PrescripcionDetalleService } from './services/prescripcion-detalle.service';
import { PrescripcionDetalleController } from './controllers/prescripcion-detalle.controller';
import { modulesProviders } from 'src/providers/modules-providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...modulesProviders,
    PrescripcionDetalleGateway,
    PrescripcionDetalleService,
  ],
  controllers: [PrescripcionDetalleController],
})
export class PrescripcionDetalleModule {}

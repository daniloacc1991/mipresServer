import { Module } from '@nestjs/common';
import { PrescripcionEncabezadoGateway } from './gateway/prescripcion-encabezado.gateway';
import { DatabaseModule } from 'src/database/database.module';
import { PrescripcionEncabezadoController } from './controllers/prescripcion-encabezado.controller';
import { PrescripcionEncabezadoService } from './service/prescripcion-encabezado.service';
import { modulesProviders } from 'src/providers/modules-providers';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...modulesProviders,
    PrescripcionEncabezadoService,
    PrescripcionEncabezadoGateway,
  ],
  controllers: [PrescripcionEncabezadoController],
})
export class PrescripcionEncabezadoModule { }

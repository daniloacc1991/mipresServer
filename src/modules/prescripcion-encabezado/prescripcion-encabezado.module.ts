import { Module, HttpModule } from '@nestjs/common';
import { PrescripcionEncabezadoGateway } from './gateway/prescripcion-encabezado.gateway';
import { DatabaseModule } from '../../database/database.module';
import { PrescripcionEncabezadoController } from './controllers/prescripcion-encabezado.controller';
import { PrescripcionEncabezadoService } from './service/prescripcion-encabezado.service';
import { modulesProviders } from '../../providers/modules-providers';

@Module({
  imports: [
    DatabaseModule,
    HttpModule.register({
      timeout: 200000,
    }),
  ],
  providers: [
    ...modulesProviders,
    PrescripcionEncabezadoService,
    PrescripcionEncabezadoGateway,
  ],
  controllers: [PrescripcionEncabezadoController],
})
export class PrescripcionEncabezadoModule { }

import { Module, HttpModule } from '@nestjs/common';
import { EntregaController } from './controllers/entrega.controller';
import { EntregaService } from './services/entrega.service';
import { EntregaGateway } from './gateway/entrega.gateway';
import { modulesProviders } from 'src/providers/modules-providers';
import { DatabaseModule } from 'src/database/database.module';
import { PrescripcionEncabezadoGateway } from '../prescripcion-encabezado/gateway/prescripcion-encabezado.gateway';

@Module({
  imports: [
    DatabaseModule,
    HttpModule,
  ],
  controllers: [EntregaController],
  providers: [
    ...modulesProviders,
    EntregaService,
    EntregaGateway,
    PrescripcionEncabezadoGateway,
  ],
})
export class EntregaModule {}

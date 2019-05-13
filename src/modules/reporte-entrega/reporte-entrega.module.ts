import { Module, HttpModule } from '@nestjs/common';
import { ReporteEntregaGateway } from './gateway/reporte-entrega.gateway';
import { ReporteEntregaController } from './controllers/reporte-entrega.controller';
import { ReporteEntregaService } from './services/reporte-entrega.service';
import { DatabaseModule } from '../../database/database.module';
import { modulesProviders } from '../../providers/modules-providers';

@Module({
  imports: [
    DatabaseModule,
    HttpModule,
  ],
  providers: [
    ...modulesProviders,
    ReporteEntregaGateway,
    ReporteEntregaService,
  ],
  controllers: [ReporteEntregaController],
})
export class ReporteEntregaModule { }

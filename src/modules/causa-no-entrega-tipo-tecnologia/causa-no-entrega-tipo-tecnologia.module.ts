import { Module } from '@nestjs/common';
import { CausaNoEntregaTipoTecnologiaController } from './controllers/causa-no-entrega-tipo-tecnologia.controller';
import { CausaNoEntregaTipoTecnologiaService } from './services/causa-no-entrega-tipo-tecnologia.service';
import { CausaNoEntregaTipoTecnologiaGateway } from './gateway/causa-no-entrega-tipo-tecnologia.gateway';
import { DatabaseModule } from '../../database/database.module';
import { modulesProviders } from '../../providers/modules-providers';

@Module({
  imports: [DatabaseModule],
  controllers: [CausaNoEntregaTipoTecnologiaController],
  providers: [
    ...modulesProviders,
    CausaNoEntregaTipoTecnologiaService,
    CausaNoEntregaTipoTecnologiaGateway,
  ],
})
export class CausaNoEntregaTipoTecnologiaModule {}

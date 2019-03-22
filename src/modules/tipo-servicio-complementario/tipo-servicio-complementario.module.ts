import { Module } from '@nestjs/common';
import { TipoServicioComplementarioService } from './services/tipo-servicio-complementario.service';
import { TipoServicioComplementarioController } from './controllers/tipo-servicio-complementario.controller';
import { TipoServicioComplementarioGateway } from './gateway/tipo-servicio-complementario.gateway';
import { modulesProviders } from '../../providers/modules-providers';
import { DatabaseModule } from '../../database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...modulesProviders,
    TipoServicioComplementarioService,
    TipoServicioComplementarioGateway,
  ],
  controllers: [TipoServicioComplementarioController],
})
export class TipoServicioComplementarioModule {}

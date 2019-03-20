import { Module } from '@nestjs/common';
import { TipoServicioComplementarioService } from './services/tipo-servicio-complementario.service';
import { TipoServicioComplementarioController } from './controllers/tipo-servicio-complementario.controller';
import { TipoServicioComplementarioGateway } from './gateway/tipo-servicio-complementario.gateway';
import { modulesProviders } from 'src/providers/modules-providers';
import { DatabaseModule } from 'src/database/database.module';

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

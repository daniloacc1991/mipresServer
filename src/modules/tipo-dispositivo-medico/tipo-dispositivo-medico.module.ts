import { Module } from '@nestjs/common';
import { TipoDispositivoMedicoGateway } from './gateway/tipo-dispositivo-medico.gateway';
import { TipoDispositivoMedicoService } from './services/tipo-dispositivo-medico.service';
import { TipoDispositivoMedicoController } from './controllers/tipo-dispositivo-medico.controller';
import { DatabaseModule } from 'src/database/database.module';
import { modulesProviders } from 'src/providers/modules-providers';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...modulesProviders,
    TipoDispositivoMedicoGateway,
    TipoDispositivoMedicoService,
  ],
  controllers: [TipoDispositivoMedicoController],
})
export class TipoDispositivoMedicoModule {}

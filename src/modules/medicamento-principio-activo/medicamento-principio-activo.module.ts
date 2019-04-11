import { Module } from '@nestjs/common';
import { MedicamentoPrincipioActivoController } from './controllers/medicamento-principio-activo.controller';
import { MedicamentoPrincipioActivoService } from './services/medicamento-principio-activo.service';
import { MedicamentoPrincipioActivoGateway } from './gateway/medicamento-principio-activo.gateway';
import { DatabaseModule } from '../../database/database.module';
import { modulesProviders } from '../../providers/modules-providers';

@Module({
  imports: [DatabaseModule],
  controllers: [MedicamentoPrincipioActivoController],
  providers: [
    ...modulesProviders,
    MedicamentoPrincipioActivoService,
    MedicamentoPrincipioActivoGateway,
  ],
})
export class MedicamentoPrincipioActivoModule { }

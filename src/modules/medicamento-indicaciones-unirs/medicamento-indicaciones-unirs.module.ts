import { Module } from '@nestjs/common';
import { MedicamentoIndicacionesUnirsController } from './controllers/medicamento-indicaciones-unirs.controller';
import { MedicamentoIndicacionesUnirsService } from './services/medicamento-indicaciones-unirs.service';
import { modulesProviders } from '../../providers/modules-providers';
import { DatabaseModule } from '../../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [MedicamentoIndicacionesUnirsController],
  providers: [
    ...modulesProviders,
    MedicamentoIndicacionesUnirsService,
  ],
})
export class MedicamentoIndicacionesUnirsModule {}

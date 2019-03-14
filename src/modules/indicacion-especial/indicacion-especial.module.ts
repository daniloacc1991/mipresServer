import { Module } from '@nestjs/common';
import { IndicacionEspecialController } from './controllers/indicacion-especial.controller';
import { IndicacionEspecialService } from './services/indicacion-especial.service';
import { IndicacionEspecialGateway } from './gateway/indicacion-especial.gateway';
import { modulesProviders } from '../../providers/modules-providers';
import { DatabaseModule } from '../../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [IndicacionEspecialController],
  providers: [
    ...modulesProviders,
    IndicacionEspecialService,
    IndicacionEspecialGateway,
  ],
})
export class IndicacionEspecialModule { }

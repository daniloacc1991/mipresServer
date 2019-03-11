import { Module } from '@nestjs/common';
import { IndicacionEspecialController } from './controllers/indicacion-especial.controller';
import { IndicacionEspecialService } from './services/indicacion-especial.service';
import { IndicacionEspecialGateway } from './gateway/indicacion-especial.gateway';
import { modulesProviders } from 'src/providers/modules-providers';
import { DatabaseModule } from 'src/database/database.module';

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

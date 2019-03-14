import { Module } from '@nestjs/common';
import { FrecuenciaGateway } from './gateway/frecuencia.gateway';
import { FrecuenciaController } from './controllers/frecuencia.controller';
import { FrecuenciaService } from './services/frecuencia.service';
import { modulesProviders } from '../../providers/modules-providers';
import { DatabaseModule } from '../../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [FrecuenciaController],
  providers: [
    ...modulesProviders,
    FrecuenciaGateway,
    FrecuenciaService,
  ],
})
export class FrecuenciaModule {}

import { Module } from '@nestjs/common';
import { FrecuenciaGateway } from './gateway/frecuencia.gateway';
import { FrecuenciaController } from './controllers/frecuencia.controller';
import { FrecuenciaService } from './services/frecuencia.service';
import { modulesProviders } from 'src/providers/modules-providers';
import { DatabaseModule } from 'src/database/database.module';

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

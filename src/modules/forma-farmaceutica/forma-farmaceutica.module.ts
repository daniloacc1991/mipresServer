import { Module } from '@nestjs/common';
import { FormaFarmaceuticaGateway } from './gateway/forma-farmaceutica.gateway';
import { FormaFarmaceuticaService } from './services/forma-farmaceutica.service';
import { FormaFarmaceuticaController } from './controllers/forma-farmaceutica.controller';
import { modulesProviders } from '../../providers/modules-providers';
import { DatabaseModule } from '../../database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...modulesProviders,
    FormaFarmaceuticaGateway,
    FormaFarmaceuticaService,
  ],
  controllers: [FormaFarmaceuticaController],
})
export class FormaFarmaceuticaModule {}

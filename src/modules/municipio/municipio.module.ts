import { Module } from '@nestjs/common';
import { MunicipioController } from './controllers/municipio.controller';
import { MunicipioService } from './services/municipio.service';
import { MunicipioGateway } from './gateway/municipio.gateway';
import { modulesProviders } from '../../providers/modules-providers';
import { DatabaseModule } from '../../database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...modulesProviders,
    MunicipioService,
    MunicipioGateway,
  ],
  controllers: [MunicipioController],
})
export class MunicipioModule {}

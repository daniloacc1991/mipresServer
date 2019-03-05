import { Module } from '@nestjs/common';
import { MunicipioController } from './controllers/municipio.controller';
import { MunicipioService } from './services/municipio.service';
import { MunicipioGateway } from './gateway/municipio.gateway';
import { modulesProviders } from 'src/providers/modules-providers';
import { DatabaseModule } from 'src/database/database.module';

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

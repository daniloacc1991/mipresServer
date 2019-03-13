import { Module } from '@nestjs/common';
import { EntregaController } from './controllers/entrega.controller';
import { EntregaService } from './services/entrega.service';
import { EntregaGateway } from './gateway/entrega.gateway';
import { modulesProviders } from 'src/providers/modules-providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [EntregaController],
  providers: [
    ...modulesProviders,
    EntregaService,
    EntregaGateway,
  ],
})
export class EntregaModule {}

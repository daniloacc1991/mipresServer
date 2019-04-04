import { Module } from '@nestjs/common';
import { CausaNoEntregaController } from './controllers/causa-no-entrega.controller';
import { CausaNoEntregaService } from './services/causa-no-entrega.service';
import { CausaNoEntregaGateway } from './gateways/causa-no-entrega.gateway';
import { modulesProviders } from 'src/providers/modules-providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [CausaNoEntregaController],
  providers: [
    ...modulesProviders,
    CausaNoEntregaService,
    CausaNoEntregaGateway,
  ],
})
export class CausaNoEntregaModule {}

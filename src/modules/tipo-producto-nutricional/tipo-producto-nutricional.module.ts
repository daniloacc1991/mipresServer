import { Module } from '@nestjs/common';
import { TipoProductoNutricionalController } from './controllers/tipo-producto-nutricional.controller';
import { TipoProductoNutricionalService } from './services/tipo-producto-nutricional.service';
import { TipoProductoNutricionalGateway } from './gateway/tipo-producto-nutricional.gateway';
import { modulesProviders } from '../../providers/modules-providers';
import { DatabaseModule } from '../../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [TipoProductoNutricionalController],
  providers: [
    ...modulesProviders,
    TipoProductoNutricionalService,
    TipoProductoNutricionalGateway,
  ],
})
export class TipoProductoNutricionalModule {}

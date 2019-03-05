import { Module } from '@nestjs/common';
import { UnidadMedidaDosisGateway } from './gateway/unidad-medida-dosis.gateway';
import { UnidadMedidaDosisService } from './services/unidad-medida-dosis.service';
import { UnidadMedidaDosisController } from './controllers/unidad-medida-dosis.controller';
import { modulesProviders } from 'src/providers/modules-providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...modulesProviders,
    UnidadMedidaDosisGateway,
    UnidadMedidaDosisService,
  ],
  controllers: [UnidadMedidaDosisController],
})
export class UnidadMedidaDosisModule {}

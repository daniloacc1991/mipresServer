import { Module } from '@nestjs/common';
import { ProductoNutricionalService } from './services/producto-nutricional.service';
import { ProductoNutricionalController } from './controllers/producto-nutricional.controller';
import { ProductoNutricionalGateway } from './gateway/producto-nutricional.gateway';
import { DatabaseModule } from '../../database/database.module';
import { modulesProviders } from '../../providers/modules-providers';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...modulesProviders,
    ProductoNutricionalService,
    ProductoNutricionalGateway,
  ],
  controllers: [ProductoNutricionalController],
})
export class ProductoNutricionalModule {}

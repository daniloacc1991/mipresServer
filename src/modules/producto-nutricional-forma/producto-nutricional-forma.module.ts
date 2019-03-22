import { Module } from '@nestjs/common';
import { ProductoNutricionalFormaService } from './services/producto-nutricional-forma.service';
import { ProductoNutricionalFormaController } from './controllers/producto-nutricional-forma.controller';
import { ProductoNutricionalFormaGateway } from './gateway/producto-nutricional-forma.gateway';
import { modulesProviders } from '../../providers/modules-providers';
import { DatabaseModule } from '../../database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...modulesProviders,
    ProductoNutricionalFormaService,
    ProductoNutricionalFormaGateway,
  ],
  controllers: [ProductoNutricionalFormaController],
})
export class ProductoNutricionalFormaModule { }

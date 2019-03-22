import { Module } from '@nestjs/common';
import { ProductoNutricionalViaAdminService } from './services/producto-nutricional-via-admin.service';
import { ProductoNutricionalViaAdminController } from './controllers/producto-nutricional-via-admin.controller';
import { ProductoNutricionalViaAdminGateway } from './gateway/producto-nutricional-via-admin.gateway';
import { DatabaseModule } from '../../database/database.module';
import { modulesProviders } from '../../providers/modules-providers';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...modulesProviders,
    ProductoNutricionalViaAdminService,
    ProductoNutricionalViaAdminGateway,
  ],
  controllers: [ProductoNutricionalViaAdminController],
})
export class ProductoNutricionalViaAdminModule {}

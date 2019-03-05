import { Module } from '@nestjs/common';
import { CupsController } from './controllers/cups.controller';
import { CupsService } from './services/cups.service';
import { CupsGateway } from './gateway/cups.gateway';
import { DatabaseModule } from 'src/database/database.module';
import { modulesProviders } from 'src/providers/modules-providers';

@Module({
  imports: [DatabaseModule],
  controllers: [CupsController],
  providers: [
    ...modulesProviders,
    CupsService,
    CupsGateway,
  ],
})
export class CupsModule {}

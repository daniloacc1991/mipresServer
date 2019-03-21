import { Module } from '@nestjs/common';
import { EstadoJuntaProfesionalService } from './services/estado-junta-profesional.service';
import { EstadoJuntaProfesionalController } from './controllers/estado-junta-profesional.controller';
import { EstadoJuntaProfesionalGateway } from './gateway/estado-junta-profesional.gateway';
import { DatabaseModule } from 'src/database/database.module';
import { modulesProviders } from 'src/providers/modules-providers';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...modulesProviders,
    EstadoJuntaProfesionalService,
    EstadoJuntaProfesionalGateway,
  ],
  controllers: [EstadoJuntaProfesionalController],
})
export class EstadoJuntaProfesionalModule {}

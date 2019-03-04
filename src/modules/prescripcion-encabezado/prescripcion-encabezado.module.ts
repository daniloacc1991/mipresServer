import { Module } from '@nestjs/common';
import { modulesProviders } from 'src/providers/modules-providers';
import { PrescripcionEncabezado } from './entities/prescripcion-encabezado.entity';

@Module({
  providers: [
    ...modulesProviders,
    PrescripcionEncabezado,
  ],
})
export class PrescripcionEncabezadoModule {}

import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';
import { AmbitoAtencionModule } from './modules/ambito-atencion/ambito-atencion.module';
import { CupsModule } from './modules/cups/cups.module';
import { FormaFarmaceuticaModule } from './modules/forma-farmaceutica/forma-farmaceutica.module';
import { MunicipioModule } from './modules/municipio/municipio.module';
import { PrescripcionDetalleModule } from './modules/prescripcion-detalle/prescripcion-detalle.module';
import { PrescripcionEncabezadoModule } from './modules/prescripcion-encabezado/prescripcion-encabezado.module';
import { PresentacionModule } from './modules/presentacion/presentacion.module';
import { TipoDispositivoMedicoModule } from './modules/tipo-dispositivo-medico/tipo-dispositivo-medico.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { TipoProductoNutricionalModule } from './modules/tipo-producto-nutricional/tipo-producto-nutricional.module';

export function swaggerApp(app: INestApplication) {
  const options = new DocumentBuilder()
    .setTitle('API MIPRES San Luis')
    .setDescription('API interna para las prescripciones de la Clínica San Luis')
    .setVersion('0.0.1')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, options, {
    include:
      [
        AuthModule,
        UsersModule,
        PrescripcionEncabezadoModule,
        PrescripcionDetalleModule,
        AmbitoAtencionModule,
        CupsModule,
        FormaFarmaceuticaModule,
        MunicipioModule,
        PresentacionModule,
        TipoDispositivoMedicoModule,
        TipoProductoNutricionalModule,
      ],
  });

  SwaggerModule.setup('explorer', app, document);
}

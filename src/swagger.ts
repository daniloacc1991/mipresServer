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
import { UsersModule } from './modules/users/users.module';
import { TipoProductoNutricionalModule } from './modules/tipo-producto-nutricional/tipo-producto-nutricional.module';
import { UnidadMedidaDosisModule } from './modules/unidad-medida-dosis/unidad-medida-dosis.module';
import { Cie10Module } from './modules/cie10/cie10.module';
import { IndicacionEspecialModule } from './modules/indicacion-especial/indicacion-especial.module';
import { FrecuenciaModule } from './modules/frecuencia/frecuencia.module';
import { EntregaModule } from './modules/entrega/entrega.module';
import { ViaAdministracionModule } from './modules/via-administracion/via-administracion.module';
import { ProductoNutricionalModule } from './modules/producto-nutricional/producto-nutricional.module';
import { ProductoNutricionalFormaModule } from './modules/producto-nutricional-forma/producto-nutricional-forma.module';
import { ProductoNutricionalViaAdminModule } from './modules/producto-nutricional-via-admin/producto-nutricional-via-admin.module';
import { TipoServicioComplementarioModule } from './modules/tipo-servicio-complementario/tipo-servicio-complementario.module';
import { EstadoJuntaProfesionalModule } from './modules/estado-junta-profesional/estado-junta-profesional.module';

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
        UsersModule,
        PrescripcionEncabezadoModule,
        PrescripcionDetalleModule,
        EstadoJuntaProfesionalModule,
        AmbitoAtencionModule,
        CupsModule,
        FormaFarmaceuticaModule,
        MunicipioModule,
        PresentacionModule,
        TipoDispositivoMedicoModule,
        TipoProductoNutricionalModule,
        UnidadMedidaDosisModule,
        Cie10Module,
        IndicacionEspecialModule,
        FrecuenciaModule,
        ViaAdministracionModule,
        ProductoNutricionalModule,
        ProductoNutricionalFormaModule,
        ProductoNutricionalViaAdminModule,
        TipoServicioComplementarioModule,
        EntregaModule,
      ],
  });

  SwaggerModule.setup('explorer', app, document);
}

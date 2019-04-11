import { Module } from '@nestjs/common';
import { PrescripcionEncabezadoModule } from './modules/prescripcion-encabezado/prescripcion-encabezado.module';
import { AmbitoAtencionModule } from './modules/ambito-atencion/ambito-atencion.module';
import { MunicipioModule } from './modules/municipio/municipio.module';
import { PrescripcionDetalleModule } from './modules/prescripcion-detalle/prescripcion-detalle.module';
import { FormaFarmaceuticaModule } from './modules/forma-farmaceutica/forma-farmaceutica.module';
import { ViaAdministracionModule } from './modules/via-administracion/via-administracion.module';
import { UnidadMedidaDosisModule } from './modules/unidad-medida-dosis/unidad-medida-dosis.module';
import { PresentacionModule } from './modules/presentacion/presentacion.module';
import { CupsModule } from './modules/cups/cups.module';
import { TipoDispositivoMedicoModule } from './modules/tipo-dispositivo-medico/tipo-dispositivo-medico.module';
import { TipoProductoNutricionalModule } from './modules/tipo-producto-nutricional/tipo-producto-nutricional.module';
import { UsersModule } from './modules/users/users.module';
import { DatabaseModule } from './database/database.module';
import { Cie10Module } from './modules/cie10/cie10.module';
import { IndicacionEspecialModule } from './modules/indicacion-especial/indicacion-especial.module';
import { FrecuenciaModule } from './modules/frecuencia/frecuencia.module';
import { EntregaModule } from './modules/entrega/entrega.module';
import { ConfigService } from './config-service';
import { AppController } from './app.controller';
import { ProductoNutricionalModule } from './modules/producto-nutricional/producto-nutricional.module';
import { ProductoNutricionalFormaModule } from './modules/producto-nutricional-forma/producto-nutricional-forma.module';
import { ProductoNutricionalViaAdminModule } from './modules/producto-nutricional-via-admin/producto-nutricional-via-admin.module';
import { TipoServicioComplementarioModule } from './modules/tipo-servicio-complementario/tipo-servicio-complementario.module';
import { EstadoJuntaProfesionalModule } from './modules/estado-junta-profesional/estado-junta-profesional.module';
import { CausaNoEntregaModule } from './modules/causa-no-entrega/causa-no-entrega.module';
import { CausaNoEntregaTipoTecnologiaModule } from './modules/causa-no-entrega-tipo-tecnologia/causa-no-entrega-tipo-tecnologia.module';
import { MedicamentoPrincipioActivoModule } from './modules/medicamento-principio-activo/medicamento-principio-activo.module';
import { MedicamentoIndicacionesUnirsModule } from './modules/medicamento-indicaciones-unirs/medicamento-indicaciones-unirs.module';

@Module({
  imports: [
    DatabaseModule,
    UsersModule,
    PrescripcionEncabezadoModule,
    PrescripcionDetalleModule,
    AmbitoAtencionModule,
    MunicipioModule,
    FormaFarmaceuticaModule,
    ViaAdministracionModule,
    UnidadMedidaDosisModule,
    PresentacionModule,
    CupsModule,
    TipoDispositivoMedicoModule,
    TipoProductoNutricionalModule,
    Cie10Module,
    IndicacionEspecialModule,
    FrecuenciaModule,
    EntregaModule,
    ProductoNutricionalModule,
    ProductoNutricionalFormaModule,
    ProductoNutricionalViaAdminModule,
    TipoServicioComplementarioModule,
    EstadoJuntaProfesionalModule,
    CausaNoEntregaModule,
    CausaNoEntregaTipoTecnologiaModule,
    MedicamentoPrincipioActivoModule,
    MedicamentoIndicacionesUnirsModule,
  ],
  controllers: [AppController],
  providers: [
    {
      provide: ConfigService,
      useValue: new ConfigService(`.env`),
    },
  ],
})
export class AppModule { }

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
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
  ],
  controllers: [AppController],
  providers: [
    AppService,
  ],
})
export class AppModule { }

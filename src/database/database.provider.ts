import { Sequelize } from 'sequelize-typescript';
import { PrescripcionEncabezado } from '../modules/prescripcion-encabezado/entities/prescripcion-encabezado.entity';
import { AmbitoAtencion } from '../modules/ambito-atencion/entities/ambito-atencion.entity';
import { Municipio } from '../modules/municipio/entities/municipio.entity';
import { PrescripcionDetalle } from '../modules/prescripcion-detalle/entities/prescripcion-detalle.entity';
import { FormaFarmaceutica } from '../modules/forma-farmaceutica/entities/forma-farmaceutica';
import { ViaAdministracion } from '../modules/via-administracion/entities/via-administracion.entity';
import { UnidadMedidaDosis } from '../modules/unidad-medida-dosis/entities/unidad-medida-dosis';
import { Presentacion } from '../modules/presentacion/entities/presentacion.entity';
import { TipoDispositivoMedico } from '../modules/tipo-dispositivo-medico/entities/tipo-dispositivo-medico';
import { TipoProductoNutricional } from '../modules/tipo-producto-nutricional/entities/tipo-producto-nutricional.entity';
import { Cups } from '../modules/cups/entities/cups.entity';
import { User } from '../modules/users/entities/user.entity';
import { Cie10 } from '../modules/cie10/entities/cie10.entity';
import { IndicacionEspecial } from '../modules/indicacion-especial/entities/indicacion-especial';
import { Frecuencia } from '../modules/frecuencia/entities/frecuencia.entity';
import { Entrega } from '../modules/entrega/entities/entrega.entity';
import { ProductoNutricional } from '../modules/producto-nutricional/entities/producto-nutricional.entity';
import { ProductoNutricionalForma } from '../modules/producto-nutricional-forma/entities/producto-nutricional-forma.entity';
import { ProductoNutricionalViaAdmin } from '../modules/producto-nutricional-via-admin/entities/producto-nutricional-via-admin.entity';
import { TipoServicioComplementario } from '../modules/tipo-servicio-complementario/entities/tipo-servicio-complementario.entity';
import { EstadoJuntaProfesional } from '../modules/estado-junta-profesional/entities/estado-junta-profesional.entity';
import { CausaNoEntrega } from '../modules/causa-no-entrega/entities/causa-no-entrega.entity';
import { CausaNoEntregaTipoTecnologia } from '../modules/causa-no-entrega-tipo-tecnologia/entites/causa-no-entrega-tipo-tecnologia.entity';
import { MedicamentoPrincipioActivo } from '../modules/medicamento-principio-activo/entities/medicamento-principio-activo.entity';
import { MedicamentoIndicacionesUnirs } from '../modules/medicamento-indicaciones-unirs/entities/medicamento-indicaciones-unirs.entity';
import { ReporteEntrega } from '../modules/reporte-entrega/entities/reporte-entrega.entity';

export const databaseProviders = [
  {
    provide: 'SequelizeRepository',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: process.env.HOST_DB,
        port: parseInt(process.env.PORT_DB, 0),
        username: 'postgres',
        password: 'POSTGRES',
        database: process.env.DB,
        dialectOptions: {
          application_name: 'API - Mipres San Luis',
        },
        pool: {
          acquire: 1000,
          idle: 5000,
          max: 20,
          min: 1,
        },
      });
      sequelize.addModels([
        User,
        Municipio,
        AmbitoAtencion,
        Cie10,
        PrescripcionEncabezado,
        FormaFarmaceutica,
        ViaAdministracion,
        UnidadMedidaDosis,
        Presentacion,
        Cups,
        TipoDispositivoMedico,
        TipoProductoNutricional,
        IndicacionEspecial,
        Frecuencia,
        ProductoNutricional,
        ProductoNutricionalForma,
        ProductoNutricionalViaAdmin,
        TipoServicioComplementario,
        EstadoJuntaProfesional,
        PrescripcionDetalle,
        Entrega,
        CausaNoEntrega,
        CausaNoEntregaTipoTecnologia,
        MedicamentoPrincipioActivo,
        MedicamentoIndicacionesUnirs,
        ReporteEntrega,
      ]);
      await sequelize.sync();
      return sequelize;
    },
  },
];

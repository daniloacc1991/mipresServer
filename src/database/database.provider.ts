import { Sequelize } from 'sequelize-typescript';
import { PrescripcionEncabezado } from '../modules/prescripcion-encabezado/entities/prescripcion-encabezado.entity';
import { AmbitoAtencion } from 'src/modules/ambito-atencion/entities/ambito-atencion.entity';
import { Municipio } from 'src/modules/municipio/entities/municipio';
import { PrescripcionDetalle } from 'src/modules/prescripcion-detalle/entities/prescripcion-detalle.entity';
import { FormaFarmaceutica } from 'src/modules/forma-farmaceutica/entities/forma-farmaceutica';
import { ViaAdministracion } from 'src/modules/via-administracion/entities/via-administracion.entity';
import { UnidadMedidaDosis } from 'src/modules/unidad-medida-dosis/entities/unidad-medida-dosis';
import { Presentacion } from 'src/modules/presentacion/entities/presentacion.entity';
import { TipoDispositivoMedico } from 'src/modules/tipo-dispositivo-medico/entities/tipo-dispositivo-medico';
import { TipoProductoNutricional } from 'src/modules/tipo-producto-nutricional/entities/tipo-producto-nutricional.entity';
import { Cups } from 'src/modules/cups/entities/cups.entity';
import { User } from 'src/modules/users/entities/user.entity';
import { Cie10 } from 'src/modules/cie10/entities/cie10.entity';
import { IndicacionEspecial } from 'src/modules/indicacion-especial/entities/indicacion-especial';
import { Frecuencia } from 'src/modules/frecuencia/entities/frecuencia';
import { Entrega } from 'src/modules/entrega/entities/entrega.entity';

export const databaseProviders = [
  {
    provide: 'SequelizeRepository',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'POSTGRES',
        database: 'mipres_db',
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
        PrescripcionDetalle,
        Entrega,
      ]);
      await sequelize.sync();
      return sequelize;
    },
  },
];

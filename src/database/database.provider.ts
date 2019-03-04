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

export const databaseProviders = [
  {
    provide: 'sequelizeProvider',
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
        PrescripcionEncabezado,
        FormaFarmaceutica,
        ViaAdministracion,
        UnidadMedidaDosis,
        Presentacion,
        Cups,
        TipoDispositivoMedico,
        TipoProductoNutricional,
        PrescripcionDetalle,
      ]);
      await sequelize.sync();
      return sequelize;
    },
  },
];

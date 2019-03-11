import { User } from 'src/modules/users/entities/user.entity';
import { PrescripcionEncabezado } from 'src/modules/prescripcion-encabezado/entities/prescripcion-encabezado.entity';
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
import { Cie10 } from 'src/modules/cie10/entities/cie10.entity';
import { IndicacionEspecial } from 'src/modules/indicacion-especial/entities/indicacion-especial';
import { Frecuencia } from 'src/modules/frecuencia/entities/frecuencia';

export const modulesProviders = [
  {
    provide: 'UsersRepository',
    useValue: User,
  },
  {
    provide: 'MunicipioRepository',
    useValue: Municipio,
  },
  {
    provide: 'Cie10Repository',
    useValue: Cie10,
  },
  {
    provide: 'AmbitoAtencionRepository',
    useValue: AmbitoAtencion,
  },
  {
    provide: 'PrescripcionEncabezadoRepository',
    useValue: PrescripcionEncabezado,
  },
  {
    provide: 'FormaFarmaceuticaRepository',
    useValue: FormaFarmaceutica,
  },
  {
    provide: 'ViaAdministracionRepository',
    useValue: ViaAdministracion,
  },
  {
    provide: 'UnidadMedidaDosisRepository',
    useValue: UnidadMedidaDosis,
  },
  {
    provide: 'PresentacionRepository',
    useValue: Presentacion,
  },
  {
    provide: 'CupsRepository',
    useValue: Cups,
  },
  {
    provide: 'TipoDispositivoMedicoRepository',
    useValue: TipoDispositivoMedico,
  },
  {
    provide: 'TipoProductoNutricionalRepository',
    useValue: TipoProductoNutricional,
  },
  {
    provide: 'IndicacionEspecialRepository',
    useValue: IndicacionEspecial,
  },
  {
    provide: 'FrecuenciaRepository',
    useValue: Frecuencia,
  },
  {
    provide: 'PrescripcionDetalleRepository',
    useValue: PrescripcionDetalle,
  },
];

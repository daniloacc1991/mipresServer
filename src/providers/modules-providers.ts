import { User } from '../modules/users/entities/user.entity';
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
import { Cie10 } from '../modules/cie10/entities/cie10.entity';
import { IndicacionEspecial } from '../modules/indicacion-especial/entities/indicacion-especial';
import { Frecuencia } from '../modules/frecuencia/entities/frecuencia.entity';
import { Entrega } from '../modules/entrega/entities/entrega.entity';
import { ProductoNutricional } from 'src/modules/producto-nutricional/entities/producto-nutricional.entity';
import { ProductoNutricionalForma } from 'src/modules/producto-nutricional-forma/entities/producto-nutricional-forma.entity';
import { ProductoNutricionalViaAdmin } from 'src/modules/producto-nutricional-via-admin/entities/producto-nutricional-via-admin.entity';
import { TipoServicioComplementario } from 'src/modules/tipo-servicio-complementario/entities/tipo-servicio-complementario.entity';
import { EstadoJuntaProfesional } from 'src/modules/estado-junta-profesional/entities/estado-junta-profesional.entity';

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
    provide: 'ProductoNutricionalRepository',
    useValue: ProductoNutricional,
  },
  {
    provide: 'ProductoNutricionalFormaRepository',
    useValue: ProductoNutricionalForma,
  },
  {
    provide: 'ProductoNutricionalViaAdminRepository',
    useValue: ProductoNutricionalViaAdmin,
  },
  {
    provide: 'TipoServicioComplementarioRepository',
    useValue: TipoServicioComplementario,
  },
  {
    provide: 'EstadoJuntaProfesionalRepository',
    useValue: EstadoJuntaProfesional,
  },
  {
    provide: 'PrescripcionDetalleRepository',
    useValue: PrescripcionDetalle,
  },
  {
    provide: 'EntregaRepository',
    useValue: Entrega,
  },
];

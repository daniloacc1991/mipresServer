import { Table, Model, Column, PrimaryKey, DataType, AutoIncrement, AllowNull, Default, HasMany, DefaultScope } from 'sequelize-typescript';
import { ForeignKey, BelongsTo } from 'sequelize-typescript';
import { FormaFarmaceutica } from '../../../modules/forma-farmaceutica/entities/forma-farmaceutica';
import { ViaAdministracion } from '../../../modules/via-administracion/entities/via-administracion.entity';
import { UnidadMedidaDosis } from '../../../modules/unidad-medida-dosis/entities/unidad-medida-dosis';
import { PrescripcionEncabezado } from '../../../modules/prescripcion-encabezado/entities/prescripcion-encabezado.entity';
import { Cups } from '../../../modules/cups/entities/cups.entity';
import { TipoDispositivoMedico } from '../../../modules/tipo-dispositivo-medico/entities/tipo-dispositivo-medico';
import { TipoProductoNutricional } from '../../../modules/tipo-producto-nutricional/entities/tipo-producto-nutricional.entity';
import { ApiModelProperty } from '@nestjs/swagger';
import { IndicacionEspecial } from '../../../modules/indicacion-especial/entities/indicacion-especial';
import { Entrega } from '../../../modules/entrega/entities/entrega.entity';
import { Frecuencia } from '../../../modules/frecuencia/entities/frecuencia.entity';
import { Presentacion } from '../../../modules/presentacion/entities/presentacion.entity';
import { ProductoNutricionalViaAdmin } from '../../../modules/producto-nutricional-via-admin/entities/producto-nutricional-via-admin.entity';
import { ProductoNutricionalForma } from '../../../modules/producto-nutricional-forma/entities/producto-nutricional-forma.entity';
import { TipoServicioComplementario } from '../../../modules/tipo-servicio-complementario/entities/tipo-servicio-complementario.entity';
import { ProductoNutricional } from '../../../modules/producto-nutricional/entities/producto-nutricional.entity';
import { EstadoJuntaProfesional } from '../../../modules/estado-junta-profesional/entities/estado-junta-profesional.entity';
import { MedicamentoPrincipioActivo } from '../../../modules/medicamento-principio-activo/entities/medicamento-principio-activo.entity';
import { MedicamentoIndicacionesUnirs } from '../../../modules/medicamento-indicaciones-unirs/entities/medicamento-indicaciones-unirs.entity';

@Table({
  timestamps: true,
  paranoid: true,
  tableName: 'mp_prescripcion_detalle',
})
export class PrescripcionDetalle extends Model<PrescripcionDetalle> {

  @AutoIncrement
  @PrimaryKey
  @ApiModelProperty()
  @Column(DataType.BIGINT)
  id: number;

  @AllowNull(false)
  @ApiModelProperty()
  @Column(DataType.STRING('1'))
  TipoTecnologia: string;

  @AllowNull(false)
  @ApiModelProperty()
  @Column
  ConOrden: number;

  @ApiModelProperty()
  @Column
  TipoMed: number;

  @AllowNull(false)
  @ApiModelProperty()
  @Column
  TipoPrest: number;

  @ApiModelProperty()
  @Column
  CausaS1: number;

  @ApiModelProperty()
  @Column
  CausaS11: number;

  @ApiModelProperty()
  @Column
  CausaS12: number;

  @ApiModelProperty()
  @Column
  CausaS2: number;

  @ApiModelProperty()
  @Column
  CausaS3: number;

  @ApiModelProperty()
  @Column
  RznCausaS31: number;

  @ApiModelProperty()
  @Column(DataType.STRING('160'))
  DescRzn31: string;

  @ApiModelProperty()
  @Column
  RznCausaS32: number;

  @ApiModelProperty()
  @Column(DataType.STRING('160'))
  DescRzn32: string;

  @ApiModelProperty()
  @Column
  CausaS4: number;

  @ApiModelProperty()
  @Column(DataType.STRING('160'))
  DescCausaS4: string;

  @ApiModelProperty()
  @Column
  RznCausaS41: number;

  @ApiModelProperty()
  @Column(DataType.STRING('160'))
  DescRzn41: string;

  @ApiModelProperty()
  @Column
  RznCausaS42: number;

  @ApiModelProperty()
  @Column(DataType.STRING('160'))
  DescRzn42: string;

  @ApiModelProperty()
  @Column
  RznCausaS43: number;

  @ApiModelProperty()
  @Column(DataType.STRING('160'))
  DescRzn43: string;

  @ApiModelProperty()
  @Column
  RznCausaS44: number;

  @ApiModelProperty()
  @Column(DataType.STRING('160'))
  DescRzn44: string;

  @ApiModelProperty()
  @Column
  CausaS5: number;

  @ApiModelProperty()
  @Column
  RznCausaS5: number;

  @ApiModelProperty()
  @Column
  RznCausaS51: number;

  @ApiModelProperty()
  @Column(DataType.STRING('160'))
  DescRzn51: string;

  @ApiModelProperty()
  @Column
  RznCausaS52: number;

  @ApiModelProperty()
  @Column(DataType.STRING('160'))
  DescRzn52: string;

  @ApiModelProperty()
  @Column
  RznCausaS53: number;

  @ApiModelProperty()
  @Column(DataType.STRING('160'))
  DescRzn53: string;

  @ApiModelProperty()
  @Column
  RznCausaS54: number;

  @ApiModelProperty()
  @Column(DataType.STRING('160'))
  DescRzn54: string;

  @ApiModelProperty()
  @Column
  CausaS6: number;

  @ApiModelProperty()
  @Column
  CausaS7: number;

  @ApiModelProperty()
  @Column(DataType.STRING(300))
  MedPBSUtilizado: string;

  @ApiModelProperty()
  @Column(DataType.STRING(300))
  MedPBSDescartado: string;

  @ApiModelProperty()
  @Column(DataType.STRING('6'))
  ProPBSUtilizado: string;

  @ApiModelProperty()
  @Column(DataType.STRING('6'))
  ProPBSDescartado: string;

  @ApiModelProperty()
  @Column(DataType.STRING('160'))
  ProNutUtilizado: string;

  @ApiModelProperty()
  @Column(DataType.STRING('160'))
  ProNutDescartado: string;

  @ForeignKey(() => TipoDispositivoMedico)
  @ApiModelProperty()
  @Column(DataType.STRING('3'))
  CodDisp: string;

  @BelongsTo(() => TipoDispositivoMedico)
  tipoDispositivoMedico: TipoDispositivoMedico;

  @ForeignKey(() => Cups)
  @ApiModelProperty()
  @Column(DataType.STRING('6'))
  CodCUPS: string;

  @BelongsTo(() => Cups)
  cups: Cups;

  @ApiModelProperty()
  @Column
  DXEnfHuer: number;

  @ApiModelProperty()
  @Column
  DXVIH: number;

  @ApiModelProperty()
  @Column
  DXCaPal: number;

  @ApiModelProperty()
  @Column
  DXEnfRCEV: number;

  @ApiModelProperty()
  @ForeignKey(() => TipoProductoNutricional)
  @Column(DataType.STRING('4'))
  TippProNut: string;

  @BelongsTo(() => TipoProductoNutricional)
  tipoProductoNutricional: TipoProductoNutricional;

  @ApiModelProperty()
  @ForeignKey(() => ProductoNutricional)
  @Column(DataType.STRING('6'))
  DescProdNutr: string;

  @BelongsTo(() => ProductoNutricional, {
    as: 'productoNutricional',
    foreignKey: 'DescProdNutr',
    targetKey: 'codigo',
  })
  productoNutricional: ProductoNutricional;

  @ApiModelProperty()
  @Column
  CanForm: number;

  @ApiModelProperty()
  @Column
  CadaFreUso: number;

  @ApiModelProperty()
  @ForeignKey(() => Frecuencia)
  @Column
  CodFreUso: number;

  @BelongsTo(() => Frecuencia, {
    as: 'codigoFreUso',
    foreignKey: 'CodFreUso',
  })
  codigoFreUso: Frecuencia;

  @ApiModelProperty()
  @Column
  Cant: number;

  @ApiModelProperty()
  @Column
  CantTotal: number;

  @ApiModelProperty()
  @ForeignKey(() => Frecuencia)
  @Column
  CodPerDurTrat: number;

  @BelongsTo(() => Frecuencia, {
    constraints: false,
    as: 'codigoPerDurTrat',
    foreignKey: 'CodPerDurTrat',
  })
  codigoPerdurTrat: Frecuencia;

  @ApiModelProperty()
  @ForeignKey(() => TipoServicioComplementario)
  @Column(DataType.STRING('2'))
  CodSerComp: string;

  @BelongsTo(() => TipoServicioComplementario, {
    as: 'tipoServicioComplementario',
    foreignKey: 'CodSerComp',
    targetKey: 'codigo',
    onDelete: 'CASCADE',
    constraints: true,
  })
  tipoServicioComplementario: TipoServicioComplementario;

  @ApiModelProperty()
  @Column(DataType.STRING('160'))
  DescSerComp: string;

  @ApiModelProperty()
  @Column(DataType.STRING('1000'))
  DescMedPrinAct: string;

  @ForeignKey(() => FormaFarmaceutica)
  @ApiModelProperty()
  @Column(DataType.STRING('8'))
  CodFF: string;

  @BelongsTo(() => FormaFarmaceutica)
  formaFarmaceutica: FormaFarmaceutica;

  @ForeignKey(() => ViaAdministracion)
  @ApiModelProperty()
  @Column(DataType.STRING('3'))
  CodVA: string;

  @BelongsTo(() => ViaAdministracion)
  viaAdministracion: ViaAdministracion;

  @ApiModelProperty()
  @ForeignKey(() => ProductoNutricionalForma)
  @Column
  CodForma: number;

  @BelongsTo(() => ProductoNutricionalForma)
  codigoFormaNut: ProductoNutricionalForma;

  @ApiModelProperty()
  @ForeignKey(() => ProductoNutricionalViaAdmin)
  @Column
  CodViaAdmon: number;

  @BelongsTo(() => ProductoNutricionalViaAdmin)
  codigoViaAdmonNut: ProductoNutricionalViaAdmin;

  @ApiModelProperty()
  @Column({
    type: DataType['DOUBLE PRECISION'],
    field: 'dosis',
  })
  Dosis: number;

  @ForeignKey(() => UnidadMedidaDosis)
  @ApiModelProperty()
  @Column(DataType.STRING('4'))
  DosisUM: string;

  @BelongsTo(() => UnidadMedidaDosis)
  unidadMedidaDosis: UnidadMedidaDosis;

  @ApiModelProperty()
  @Column
  NoFAdmon: number;

  @ApiModelProperty()
  @ForeignKey(() => Frecuencia)
  @Column
  CodFreAdmon: number;

  @BelongsTo(() => Frecuencia, {
    constraints: false,
    as: 'codigoFreAdmon',
    foreignKey: 'CodFreAdmon',
  })
  codigoFreAdmon: Frecuencia;

  @ApiModelProperty()
  @ForeignKey(() => IndicacionEspecial)
  @Column
  IndEsp: number;

  @BelongsTo(() => IndicacionEspecial)
  indicacionEspecial: IndicacionEspecial;

  @ApiModelProperty()
  @Column
  CanTrat: number;

  @ApiModelProperty()
  @ForeignKey(() => Frecuencia)
  @Column
  DurTrat: number;

  @BelongsTo(() => Frecuencia, {
    as: 'duracionTrat',
    foreignKey: 'DurTrat',
  })
  duracionTrat: Frecuencia;

  @ApiModelProperty()
  @Column(DataType.DOUBLE)
  CantTotalF: number;

  @ApiModelProperty()
  @ForeignKey(() => Presentacion)
  @Column(DataType.STRING('2'))
  UFCantTotal: string;

  @BelongsTo(() => Presentacion, {
    constraints: false,
    as: 'codigoUFCantTotal',
    foreignKey: 'UFCantTotal',
  })
  codigoUFCantTotal: Presentacion;

  @ApiModelProperty()
  @Column(DataType.STRING('20'))
  NoPrescAso: string;

  @ApiModelProperty()
  @Column(DataType.STRING('500'))
  JustNoPBS: string;

  @ApiModelProperty()
  @Column(DataType.STRING('160'))
  IndRec: string;

  @ApiModelProperty()
  @ForeignKey(() => EstadoJuntaProfesional)
  @AllowNull(false)
  @Column
  EstJM: number;

  @ApiModelProperty()
  @AllowNull(false)
  @Default(false)
  @Column(DataType.BOOLEAN)
  indEntregado: boolean;

  @ApiModelProperty()
  @Default(0)
  @Column
  cantidadEntregada: number;

  @HasMany(() => MedicamentoPrincipioActivo)
  PrincipiosActivos: MedicamentoPrincipioActivo[];

  @HasMany(() => MedicamentoIndicacionesUnirs)
  IndicacionesUNIRS: MedicamentoIndicacionesUnirs[];

  @ForeignKey(() => PrescripcionEncabezado)
  @ApiModelProperty()
  @Column
  prescripcionId: number;

  @BelongsTo(() => PrescripcionEncabezado)
  prescripcion: PrescripcionEncabezado;

  @HasMany(() => Entrega)
  entregas: Entrega[];
}

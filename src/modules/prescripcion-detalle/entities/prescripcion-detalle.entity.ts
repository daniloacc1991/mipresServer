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
import { Frecuencia } from 'src/modules/frecuencia/entities/frecuencia.entity';
import { Presentacion } from 'src/modules/presentacion/entities/presentacion.entity';
import { ProductoNutricionalViaAdmin } from 'src/modules/producto-nutricional-via-admin/entities/producto-nutricional-via-admin.entity';
import { ProductoNutricionalForma } from 'src/modules/producto-nutricional-forma/entities/producto-nutricional-forma.entity';

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
  @Column(DataType.STRING('160'))
  RznCausaS5: string;

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
  @Column
  MedPBSUtilizado: string;

  @ApiModelProperty()
  @Column
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
  @Column(DataType.STRING('10'))
  CodDisp: string;

  @ForeignKey(() => Cups)
  @ApiModelProperty()
  @Column(DataType.STRING('6'))
  CodCUPS: string;

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

  @ForeignKey(() => TipoProductoNutricional)
  @ApiModelProperty()
  @Column(DataType.STRING('30'))
  TippProNut: string;

  @ApiModelProperty()
  @Column(DataType.STRING('30'))
  DescProdNutr: string;

  @ApiModelProperty()
  @Column(DataType.STRING('5'))
  CanForm: string;

  @ApiModelProperty()
  @Column(DataType.STRING('5'))
  CadaFreUso: string;

  @ApiModelProperty()
  @ForeignKey(() => Frecuencia)
  @Column
  CodFreUso: number;

  @ApiModelProperty()
  @Column(DataType.STRING('5'))
  Cant: string;

  @ApiModelProperty()
  @Column(DataType.STRING('10'))
  CantTotal: string;

  @ApiModelProperty()
  @ForeignKey(() => Frecuencia)
  @Column
  CodPerDurTrat: number;

  @ApiModelProperty()
  @Column(DataType.STRING('5'))
  CodSerComp: string;

  @ApiModelProperty()
  @Column(DataType.STRING('160'))
  DescSerComp: string;

  @ApiModelProperty()
  @Column(DataType.STRING('5000'))
  DescMedPrinAct: string;

  @ForeignKey(() => FormaFarmaceutica)
  @ApiModelProperty()
  @Column(DataType.STRING('100'))
  CodFF: string;

  @ForeignKey(() => ViaAdministracion)
  @ApiModelProperty()
  @Column(DataType.STRING('10'))
  CodVA: string;

  @ApiModelProperty()
  @ForeignKey(() => ProductoNutricionalForma)
  @Column
  CodForma: number;

  @ApiModelProperty()
  @ForeignKey(() => ProductoNutricionalViaAdmin)
  @Column
  CodViaAdmon: number;

  @ApiModelProperty()
  @Column(DataType.STRING('10'))
  Dosis: string;

  @ForeignKey(() => UnidadMedidaDosis)
  @ApiModelProperty()
  @Column(DataType.STRING('10'))
  DosisUM: string;

  @ApiModelProperty()
  @Column(DataType.STRING('5'))
  NoFAdmon: string;

  @ApiModelProperty()
  @ForeignKey(() => Frecuencia)
  @Column
  CodFreAdmon: number;

  @ApiModelProperty()
  @Default(10)
  @AllowNull(false)
  @ForeignKey(() => IndicacionEspecial)
  @Column
  IndEsp: number;

  @ApiModelProperty()
  @Column(DataType.STRING('5'))
  CanTrat: string;

  @ApiModelProperty()
  @ForeignKey(() => Frecuencia)
  @Column
  DurTrat: number;

  @ApiModelProperty()
  @Column(DataType.STRING('10'))
  CantTotalF: string;

  @ApiModelProperty()
  @ForeignKey(() => Presentacion)
  @Column(DataType.STRING('100'))
  UFCantTotal: string;

  @ApiModelProperty()
  @Column(DataType.STRING('20'))
  NoPrescAso: string;

  @ApiModelProperty()
  @Column(DataType.STRING('500'))
  JustNoPBS: string;

  @ApiModelProperty()
  @Column(DataType.STRING('160'))
  IndRec: string;

  @AllowNull(false)
  @ApiModelProperty()
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

  @ForeignKey(() => PrescripcionEncabezado)
  @ApiModelProperty()
  @Column
  prescripcionId: number;

  @BelongsTo(() => PrescripcionEncabezado)
  prescripcion: PrescripcionEncabezado;

  @BelongsTo(() => ViaAdministracion)
  viaAdministracion: ViaAdministracion;

  @BelongsTo(() => FormaFarmaceutica)
  formaFarmaceutica: FormaFarmaceutica;

  @BelongsTo(() => UnidadMedidaDosis)
  unidadMedidaDosis: UnidadMedidaDosis;

  @BelongsTo(() => Cups)
  cups: Cups;

  @BelongsTo(() => TipoDispositivoMedico)
  tipoDispositivoMedico: TipoDispositivoMedico;

  @BelongsTo(() => TipoProductoNutricional)
  tipoProductoNutricional: TipoProductoNutricional;

  @BelongsTo(() => IndicacionEspecial)
  indicacionEspecial: IndicacionEspecial;

  @BelongsTo(() => Frecuencia, {
    as: 'codigoFreUso',
    foreignKey: 'CodFreUso',
  })
  codigoFreUso: Frecuencia;

  @BelongsTo(() => Frecuencia, {
    as: 'codigoPerDurTrat',
    foreignKey: 'CodPerDurTrat',
  })
  codigoPerdurTrat: Frecuencia;

  @BelongsTo(() => Presentacion, {
    constraints: false,
    as: 'codigoUFCantTotal',
    foreignKey: 'UFCantTotal',
  })
  codigoUFCantTotal: Presentacion;

  @BelongsTo(() => Frecuencia, {
    constraints: false,
    as: 'codigoFreAdmon',
    foreignKey: 'CodFreAdmon',
  })
  codigoFreAdmon: Frecuencia;

  @BelongsTo(() => Frecuencia, {
    as: 'duracionTrat',
    foreignKey: 'DurTrat',
  })
  duracionTrat: Frecuencia;

  @BelongsTo(() => ProductoNutricionalViaAdmin)
  codigoViaAdmonNut: ProductoNutricionalViaAdmin;

  @BelongsTo(() => ProductoNutricionalForma)
  codigoFormaNut: ProductoNutricionalForma;

  @HasMany(() => Entrega)
  entregas: Entrega[];
}

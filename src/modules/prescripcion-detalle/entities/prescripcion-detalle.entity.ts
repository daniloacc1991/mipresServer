import { Table, Model, Column, PrimaryKey, DataType, AutoIncrement, AllowNull } from 'sequelize-typescript';
import { ForeignKey, BelongsTo, HasMany, BelongsToMany } from 'sequelize-typescript';
import { FormaFarmaceutica } from 'src/modules/forma-farmaceutica/entities/forma-farmaceutica';
import { ViaAdministracion } from 'src/modules/via-administracion/entities/via-administracion.entity';
import { UnidadMedidaDosis } from 'src/modules/unidad-medida-dosis/entities/unidad-medida-dosis';
import { PrescripcionEncabezado } from 'src/modules/prescripcion-encabezado/entities/prescripcion-encabezado.entity';
import { Presentacion } from 'src/modules/presentacion/entities/presentacion.entity';
import { Cups } from 'src/modules/cups/entities/cups.entity';
import { TipoDispositivoMedico } from 'src/modules/tipo-dispositivo-medico/entities/tipo-dispositivo-medico';
import { TipoProductoNutricional } from 'src/modules/tipo-producto-nutricional/entities/tipo-producto-nutricional.entity';

@Table({
  timestamps: true,
  paranoid: true,
  tableName: 'mp_prescripcion_detalle',
})
export class PrescripcionDetalle extends Model<PrescripcionDetalle> {

  @AutoIncrement
  @PrimaryKey
  @Column(DataType.BIGINT)
  id: number;

  @AllowNull(false)
  @Column(DataType.STRING('1'))
  TipoTecnologia: string;

  @AllowNull(false)
  @Column
  ConOrden: number;

  @Column
  TipoMed: number;

  @AllowNull(false)
  @Column
  TipoPrest: number;

  @Column
  CausaS1: number;

  @Column
  CausaS11: number;

  @Column
  CausaS12: number;

  @Column
  CausaS2: number;

  @Column
  CausaS3: number;

  @Column
  RznCausaS31: number;

  @Column(DataType.STRING('160'))
  DescRzn31: string;

  @Column
  RznCausaS32: number;

  @Column(DataType.STRING('160'))
  DescRzn32: string;

  @Column
  CausaS4: number;

  @Column(DataType.STRING('160'))
  DescCausaS4: string;

  @Column
  RznCausaS41: number;

  @Column(DataType.STRING('160'))
  DescRzn41: string;

  @Column
  RznCausaS42: number;

  @Column(DataType.STRING('160'))
  DescRzn42: string;

  @Column
  RznCausaS43: number;

  @Column(DataType.STRING('160'))
  DescRzn43: string;

  @Column
  RznCausaS44: number;

  @Column(DataType.STRING('160'))
  DescRzn44: string;

  @Column
  CausaS5: number;

  @Column(DataType.STRING('160'))
  RznCausaS5: string;

  @Column
  RznCausaS51: number;

  @Column(DataType.STRING('160'))
  DescRzn51: string;

  @Column
  RznCausaS52: number;

  @Column(DataType.STRING('160'))
  DescRzn52: string;

  @Column
  RznCausaS53: number;

  @Column(DataType.STRING('160'))
  DescRzn53: string;

  @Column
  RznCausaS54: number;

  @Column(DataType.STRING('160'))
  DescRzn54: string;

  @Column
  CausaS6: number;

  @Column
  CausaS7: number;

  @Column
  MedPBSUtilizado: string;

  @Column
  MedPBSDescartado: string;

  @Column(DataType.STRING('6'))
  ProPBSUtilizado: string;

  @Column(DataType.STRING('6'))
  ProPBSDescartado: string;

  @Column(DataType.STRING('160'))
  ProNutUtilizado: string;

  @Column(DataType.STRING('160'))
  ProNutDescartado: string;

  @ForeignKey(() => TipoDispositivoMedico)
  @Column(DataType.STRING('10'))
  CodDisp: string;

  @ForeignKey(() => Cups)
  @Column(DataType.STRING('6'))
  CodCUPS: string;

  @Column
  DXEnfHuer: number;

  @Column
  DXVIH: number;

  @Column
  DXCaPal: number;

  @Column
  DXEnfRCEV: number;

  @ForeignKey(() => TipoProductoNutricional)
  @Column(DataType.STRING('30'))
  TippProNut: string;

  @Column(DataType.STRING('30'))
  DescProdNutr: string;

  @Column(DataType.STRING('5'))
  CanForm: string;

  @Column(DataType.STRING('5'))
  CadaFreUso: string;

  @Column
  CodFreUso: number;

  @Column(DataType.STRING('5'))
  Cant: string;

  @Column(DataType.STRING('10'))
  CantTotal: string;

  @Column
  CodPerDurTrat: number;

  @Column(DataType.STRING('5'))
  CodSerComp: string;

  @Column(DataType.STRING('160'))
  DescSerComp: string;

  @Column(DataType.STRING('5000'))
  DescMedPrinAct: string;

  @ForeignKey(() => FormaFarmaceutica)
  @Column(DataType.STRING('100'))
  CodFF: string;

  @ForeignKey(() => ViaAdministracion)
  @Column(DataType.STRING('10'))
  CodVA: string;

  @Column(DataType.STRING('100'))
  CodForma: string;

  @Column
  CodViaAdmon: number;

  @Column(DataType.STRING('10'))
  Dosis: string;

  @ForeignKey(() => UnidadMedidaDosis)
  @Column(DataType.STRING('10'))
  DosisUM: string;

  @Column(DataType.STRING('5'))
  NoFAdmon: string;

  @Column
  CodFreAdmon: number;

  @AllowNull(false)
  @Column
  IndEsp: number;

  @Column(DataType.STRING('5'))
  CanTrat: string;

  @Column
  DurTrat: number;

  @Column(DataType.STRING('10'))
  CantTotalF: string;

  @ForeignKey(() => Presentacion)
  @Column(DataType.STRING('100'))
  UFCantTotal: string;

  @Column(DataType.STRING('20'))
  NoPrescAso: string;

  @Column(DataType.STRING('500'))
  JustNoPBS: string;

  @Column(DataType.STRING('160'))
  IndRec: string;

  @AllowNull(false)
  @Column
  EstJM: number;

  @ForeignKey(() => PrescripcionEncabezado)
  @Column
  prescripcionId: number;

  @BelongsTo(() => PrescripcionEncabezado, {
    as: 'prescripcion_encabezado_id',
  })
  prescripcion: PrescripcionEncabezado;

  @BelongsTo(() => ViaAdministracion)
  viaAdministracion: ViaAdministracion;

  @BelongsTo(() => FormaFarmaceutica)
  formaFarmaceutica: FormaFarmaceutica;

  @BelongsTo(() => UnidadMedidaDosis)
  unidadMedidaDosis: UnidadMedidaDosis;

  @BelongsTo(() => Presentacion)
  presentacion: Presentacion;

  @BelongsTo(() => Cups)
  cups: Cups;

  @BelongsTo(() => TipoDispositivoMedico)
  tipoDispositivoMedico: TipoDispositivoMedico;

  @BelongsTo(() => TipoProductoNutricional)
  tipoProductoNutricional: TipoProductoNutricional;

}

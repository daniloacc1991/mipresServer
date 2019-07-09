import { Table, Model, Column, PrimaryKey, DataType, AutoIncrement, AllowNull, Default, HasMany, DefaultScope, CreatedAt, UpdatedAt, DeletedAt } from 'sequelize-typescript';
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
  @Column({
    field: 'tipo_tecnologia',
    type: DataType.STRING('1'),
  })
  TipoTecnologia: string;

  @AllowNull(false)
  @ApiModelProperty()
  @Column({
    field: 'consecutivo_orden',
    type: DataType.INTEGER,
  })
  ConOrden: number;

  @ApiModelProperty()
  @Column({
    field: 'tipo_med',
    type: DataType.INTEGER,
  })
  TipoMed: number;

  @AllowNull(false)
  @ApiModelProperty()
  @Column({
    field: 'tipo_prest',
    type: DataType.INTEGER,
  })
  TipoPrest: number;

  @ApiModelProperty()
  @Column({
    field: 'causa_s1',
    type: DataType.INTEGER,
  })
  CausaS1: number;

  @ApiModelProperty()
  @Column({ field: 'causa_s11' })
  CausaS11: number;

  @ApiModelProperty()
  @Column({ field: 'causa_s12' })
  CausaS12: number;

  @ApiModelProperty()
  @Column({ field: 'causa_s2' })
  CausaS2: number;

  @ApiModelProperty()
  @Column({ field: 'causa_s3' })
  CausaS3: number;

  @ApiModelProperty()
  @Column({ field: 'razon_causa_s31' })
  RznCausaS31: number;

  @ApiModelProperty()
  @Column({
    field: 'descrip_razon_31',
    type: DataType.STRING('160'),
  })
  DescRzn31: string;

  @ApiModelProperty()
  @Column({ field: 'rzn_causa_s32' })
  RznCausaS32: number;

  @ApiModelProperty()
  @Column({
    field: 'descrip_razon_32',
    type: DataType.STRING('160'),
  })
  DescRzn32: string;

  @ApiModelProperty()
  @Column({ field: 'causa_s4' })
  CausaS4: number;

  @ApiModelProperty()
  @Column({
    field: 'descrip_causa_s4',
    type: DataType.STRING('160'),
  })
  DescCausaS4: string;

  @ApiModelProperty()
  @Column({ field: 'razon_causa_s41' })
  RznCausaS41: number;

  @ApiModelProperty()
  @Column({
    field: 'descrip_razon_41',
    type: DataType.STRING('160'),
  })
  DescRzn41: string;

  @ApiModelProperty()
  @Column({ field: 'razon_causa_s42' })
  RznCausaS42: number;

  @ApiModelProperty()
  @Column({
    field: 'descrip_razon_42',
    type: DataType.STRING('160'),
  })
  DescRzn42: string;

  @ApiModelProperty()
  @Column({ field: 'razon_causa_s43' })
  RznCausaS43: number;

  @ApiModelProperty()
  @Column({
    field: 'descrip_razon_43',
    type: DataType.STRING('160'),
  })
  DescRzn43: string;

  @ApiModelProperty()
  @Column({ field: 'razon_causa_s44' })
  RznCausaS44: number;

  @ApiModelProperty()
  @Column({
    field: 'descrip_razon_44',
    type: DataType.STRING('160'),
  })
  DescRzn44: string;

  @ApiModelProperty()
  @Column({ field: 'causa_s5' })
  CausaS5: number;

  @ApiModelProperty()
  @Column({ field: 'razon_causa_s5' })
  RznCausaS5: number;

  @ApiModelProperty()
  @Column({ field: 'razon_causa_s51' })
  RznCausaS51: number;

  @ApiModelProperty()
  @Column({
    field: 'descrip_razon_51',
    type: DataType.STRING('160'),
  })
  DescRzn51: string;

  @ApiModelProperty()
  @Column({ field: 'razon_causa_s52' })
  RznCausaS52: number;

  @ApiModelProperty()
  @Column({
    field: 'descrip_razon_52',
    type: DataType.STRING('160'),
  })
  DescRzn52: string;

  @ApiModelProperty()
  @Column({ field: 'razon_causa_s53' })
  RznCausaS53: number;

  @ApiModelProperty()
  @Column({
    field: 'descrip_razon_53',
    type: DataType.STRING('160'),
  })
  DescRzn53: string;

  @ApiModelProperty()
  @Column({ field: 'razon_causa_s54' })
  RznCausaS54: number;

  @ApiModelProperty()
  @Column({
    field: 'descrip_razon_54',
    type: DataType.STRING('160'),
  })
  DescRzn54: string;

  @ApiModelProperty()
  @Column({ field: 'causa_s6' })
  CausaS6: number;

  @ApiModelProperty()
  @Column({ field: 'causa_s7' })
  CausaS7: number;

  @ApiModelProperty()
  @Column({
    field: 'med_pbs_utilizado',
    type: DataType.STRING(300),
  })
  MedPBSUtilizado: string;

  @ApiModelProperty()
  @Column({
    field: 'med_pbs_descartado',
    type: DataType.STRING(300),
  })
  MedPBSDescartado: string;

  @ApiModelProperty()
  @Column({
    field: 'pro_pbs_utilizado',
    type: DataType.STRING('6'),
  })
  ProPBSUtilizado: string;

  @ApiModelProperty()
  @Column({
    field: 'pro_pbs_descartado',
    type: DataType.STRING('6'),
  })
  ProPBSDescartado: string;

  @ApiModelProperty()
  @Column({
    field: 'pro_nut_utilizado',
    type: DataType.STRING('160'),
  })
  ProNutUtilizado: string;

  @ApiModelProperty()
  @Column({
    field: 'pro_nut_descartado',
    type: DataType.STRING('160'),
  })
  ProNutDescartado: string;

  @ForeignKey(() => TipoDispositivoMedico)
  @ApiModelProperty()
  @Column({
    field: 'codigo_dispositivo',
    type: DataType.STRING(3),
  })
  CodDisp: string;

  @BelongsTo(() => TipoDispositivoMedico)
  tipoDispositivoMedico: TipoDispositivoMedico;

  @ForeignKey(() => Cups)
  @ApiModelProperty()
  @Column({
    field: 'codigo_cups',
    type: DataType.STRING(6),
  })
  CodCUPS: string;

  @BelongsTo(() => Cups)
  cups: Cups;

  @ApiModelProperty()
  @Column({ field: 'dx_enf_huer' })
  DXEnfHuer: number;

  @ApiModelProperty()
  @Column({ field: 'dx_vih' })
  DXVIH: number;

  @ApiModelProperty()
  @Column({ field: 'dx_ca_pal' })
  DXCaPal: number;

  @ApiModelProperty()
  @Column({ field: 'dx_enf_rcev' })
  DXEnfRCEV: number;

  @ApiModelProperty()
  @ForeignKey(() => TipoProductoNutricional)
  @Column({
    field: 'tipp_pro_nut',
    type: DataType.STRING('4'),
  })
  TippProNut: string;

  @BelongsTo(() => TipoProductoNutricional)
  tipoProductoNutricional: TipoProductoNutricional;

  @ApiModelProperty()
  @ForeignKey(() => ProductoNutricional)
  @Column({
    field: 'desc_prod_nutr',
    type: DataType.STRING('6'),
  })
  DescProdNutr: string;

  @BelongsTo(() => ProductoNutricional, {
    as: 'productoNutricional',
    foreignKey: 'desc_prod_nutr',
    targetKey: 'codigo',
  })
  productoNutricional: ProductoNutricional;

  @ApiModelProperty()
  @Column({ field: 'can_form' })
  CanForm: number;

  @ApiModelProperty()
  @Column({ field: 'cada_fre_uso' })
  CadaFreUso: number;

  @ApiModelProperty()
  @ForeignKey(() => Frecuencia)
  @Column({ field: 'cod_fre_uso' })
  CodFreUso: number;

  @BelongsTo(() => Frecuencia, {
    as: 'codigoFreUso',
    foreignKey: 'cod_fre_uso',
  })
  codigoFreUso: Frecuencia;

  @ApiModelProperty()
  @Column({ field: 'cantidad' })
  Cant: number;

  @ApiModelProperty()
  @Column({ field: 'cant_total' })
  CantTotal: number;

  @ApiModelProperty()
  @ForeignKey(() => Frecuencia)
  @Column({ field: 'cod_per_dur_trat' })
  CodPerDurTrat: number;

  @BelongsTo(() => Frecuencia, {
    constraints: false,
    as: 'codigoPerDurTrat',
    foreignKey: 'cod_per_dur_trat',
  })
  codigoPerdurTrat: Frecuencia;

  @ApiModelProperty()
  @ForeignKey(() => TipoServicioComplementario)
  @Column({
    field: 'cod_ser_comp',
    type: DataType.STRING('2'),
  })
  CodSerComp: string;

  @BelongsTo(() => TipoServicioComplementario, {
    as: 'tipoServicioComplementario',
    foreignKey: 'cod_ser_comp',
    targetKey: 'codigo',
    onDelete: 'CASCADE',
    constraints: true,
  })
  tipoServicioComplementario: TipoServicioComplementario;

  @ApiModelProperty()
  @Column({
    field: 'desc_ser_comp',
    type: DataType.STRING('160'),
  })
  DescSerComp: string;

  @ApiModelProperty()
  @Column({
    field: 'desc_med_prin_act',
    type: DataType.STRING('1000'),
  })
  DescMedPrinAct: string;

  @ForeignKey(() => FormaFarmaceutica)
  @ApiModelProperty()
  @Column({
    field: 'cod_ff',
    type: DataType.STRING('8'),
  })
  CodFF: string;

  @BelongsTo(() => FormaFarmaceutica)
  formaFarmaceutica: FormaFarmaceutica;

  @ForeignKey(() => ViaAdministracion)
  @ApiModelProperty()
  @Column({
    field: 'cod_va',
    type: DataType.STRING('3'),
  })
  CodVA: string;

  @BelongsTo(() => ViaAdministracion)
  viaAdministracion: ViaAdministracion;

  @ApiModelProperty()
  @ForeignKey(() => ProductoNutricionalForma)
  @Column({ field: 'cod_forma' })
  CodForma: number;

  @BelongsTo(() => ProductoNutricionalForma)
  codigoFormaNut: ProductoNutricionalForma;

  @ApiModelProperty()
  @ForeignKey(() => ProductoNutricionalViaAdmin)
  @Column({ field: 'cod_via_admon' })
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
  @Column({
    field: 'dosis_um',
    type: DataType.STRING(4),
  })
  DosisUM: string;

  @BelongsTo(() => UnidadMedidaDosis)
  unidadMedidaDosis: UnidadMedidaDosis;

  @ApiModelProperty()
  @Column({ field: 'no_f_admon' })
  NoFAdmon: number;

  @ApiModelProperty()
  @ForeignKey(() => Frecuencia)
  @Column({ field: 'cod_fre_admon' })
  CodFreAdmon: number;

  @BelongsTo(() => Frecuencia, {
    constraints: false,
    as: 'codigoFreAdmon',
    foreignKey: 'cod_fre_admon',
  })
  codigoFreAdmon: Frecuencia;

  @ApiModelProperty()
  @ForeignKey(() => IndicacionEspecial)
  @Column({ field: 'ind_especial' })
  IndEsp: number;

  @BelongsTo(() => IndicacionEspecial)
  indicacionEspecial: IndicacionEspecial;

  @ApiModelProperty()
  @Column({ field: 'cantidad_tratamiento' })
  CanTrat: number;

  @ApiModelProperty()
  @ForeignKey(() => Frecuencia)
  @Column({ field: 'dur_trat' })
  DurTrat: number;

  @BelongsTo(() => Frecuencia, {
    as: 'duracionTrat',
    foreignKey: 'dur_trat',
  })
  duracionTrat: Frecuencia;

  @ApiModelProperty()
  @Column({
    field: 'cant_total_f',
    type: DataType.DOUBLE,
  })
  CantTotalF: number;

  @ApiModelProperty()
  @ForeignKey(() => Presentacion)
  @Column({
    field: 'uf_cant_total',
    type: DataType.STRING(2),
  })
  UFCantTotal: string;

  @BelongsTo(() => Presentacion, {
    constraints: false,
    as: 'codigoUFCantTotal',
    foreignKey: 'uf_cant_total',
  })
  codigoUFCantTotal: Presentacion;

  @ApiModelProperty()
  @Column({
    field: 'no_presc_aso',
    type: DataType.STRING(20),
  })
  NoPrescAso: string;

  @ApiModelProperty()
  @Column({
    field: 'just_no_pbs',
    type: DataType.STRING(500),
  })
  JustNoPBS: string;

  @ApiModelProperty()
  @Column({
    field: 'ind_rec',
    type: DataType.STRING(160),
  })
  IndRec: string;

  @ApiModelProperty()
  @ForeignKey(() => EstadoJuntaProfesional)
  @AllowNull(false)
  @Column({ field: 'estado_junta' })
  EstJM: number;

  @ApiModelProperty()
  @AllowNull(false)
  @Default(false)
  @Column({
    field: 'ind_entregado',
    type: DataType.BOOLEAN,
  })
  indEntregado: boolean;

  @ApiModelProperty()
  @Default(0)
  @Column({ field: 'cantidad_entregada' })
  cantidadEntregada: number;

  @ApiModelProperty()
  @CreatedAt
  @Column({
    field: 'created_at',
    type: 'timestamp without time zone',
  })
  createdAt: string;

  @ApiModelProperty()
  @UpdatedAt
  @Column({
    field: 'updated_at',
    type: 'timestamp without time zone',
  })
  updatedAt: string;

  @ApiModelProperty()
  @DeletedAt
  @Column({
    field: 'deleted_at',
    type: 'timestamp without time zone',
  })
  deletedAt: string;

  @HasMany(() => MedicamentoPrincipioActivo)
  PrincipiosActivos: MedicamentoPrincipioActivo[];

  @HasMany(() => MedicamentoIndicacionesUnirs)
  IndicacionesUNIRS: MedicamentoIndicacionesUnirs[];

  @ForeignKey(() => PrescripcionEncabezado)
  @ApiModelProperty()
  @Column({
    field: 'prescripcion_id',
    type: DataType.BIGINT,
    allowNull: false,
  })
  prescripcionId: number;

  @BelongsTo(() => PrescripcionEncabezado)
  prescripcion: PrescripcionEncabezado;

  @HasMany(() => Entrega)
  entregas: Entrega[];
}

import { Table, Model, Column, PrimaryKey, DataType, Unique, AutoIncrement, AllowNull, ForeignKey, BelongsTo, HasMany } from 'sequelize-typescript';
import { CreatedAt, UpdatedAt, DeletedAt } from 'sequelize-typescript';
import { AmbitoAtencion } from '../../../modules/ambito-atencion/entities/ambito-atencion.entity';
import { Municipio } from '../../../modules/municipio/entities/municipio.entity';
import { PrescripcionDetalle } from '../../../modules/prescripcion-detalle/entities/prescripcion-detalle.entity';
import { ApiModelProperty } from '@nestjs/swagger';
import { Cie10 } from '../../../modules/cie10/entities/cie10.entity';

@Table({
  timestamps: true,
  paranoid: true,
  tableName: 'mp_prescripcion_encabezado',
})
export class PrescripcionEncabezado extends Model<PrescripcionEncabezado> {

  @AutoIncrement
  @PrimaryKey
  @ApiModelProperty()
  @Column(DataType.BIGINT)
  id: number;

  @Unique
  @AllowNull(false)
  @ApiModelProperty()
  @Column({
    field: 'no_prescripcion',
    type: DataType.STRING(20),
  })
  NoPrescripcion: string;

  @AllowNull(false)
  @ApiModelProperty()
  @Column({
    field: 'f_prescripcion',
    type: DataType.DATE,
  })
  FPrescripcion: string;

  @AllowNull(false)
  @ApiModelProperty()
  @Column({
    field: 'h_prescripcion',
    type: DataType.STRING(10),
  })
  HPrescripcion: string;

  @AllowNull(false)
  @ApiModelProperty()
  @Column({
    field: 'cod_hab_ips',
    type: DataType.STRING(20),
  })
  CodHabIPS: string;

  @AllowNull(false)
  @ApiModelProperty()
  @Column({
    field: 'tipo_id_ips',
    type: DataType.STRING(2),
  })
  TipoIDIPS: string;

  @AllowNull(false)
  @ApiModelProperty()
  @Column({
    field: 'nro_id_ips',
    type: DataType.STRING(17),
  })
  NroIDIPS: string;

  @ForeignKey(() => Municipio)
  @AllowNull(false)
  @ApiModelProperty()
  @Column({
    field: 'cod_dane_mun_ips',
    type: DataType.STRING(5),
  })
  CodDANEMunIPS: string;

  @AllowNull(false)
  @ApiModelProperty()
  @Column({
    field: 'dir_sede_ips',
    type: DataType.STRING(300),
  })
  DirSedeIPS: string;

  @AllowNull(false)
  @ApiModelProperty()
  @Column({
    field: 'tel_sede_ips',
    type: DataType.STRING(70),
  })
  TelSedeIPS: string;

  @AllowNull(false)
  @ApiModelProperty()
  @Column({
    field: 'tipo_id_prof',
    type: DataType.STRING(2),
  })
  TipoIDProf: string;

  @AllowNull(false)
  @ApiModelProperty()
  @Column({
    field: 'num_id_prof',
    type: DataType.STRING(17),
  })
  NumIDProf: string;

  @AllowNull(false)
  @ApiModelProperty()
  @Column({
    field: 'pn_prof_s',
    type: DataType.STRING(60),
  })
  PNProfS: string;

  @ApiModelProperty()
  @Column({
    field: 'sn_prof_s',
    type: DataType.STRING(60),
  })
  SNProfS: string;

  @AllowNull(false)
  @ApiModelProperty()
  @Column({
    field: 'pa_prof_s',
    type: DataType.STRING(60),
  })
  PAProfS: string;

  @ApiModelProperty()
  @Column({
    field: 'sa_prof_s',
    type: DataType.STRING(60),
  })
  SAProfS: string;

  @AllowNull(false)
  @ApiModelProperty()
  @Column({
    field: 'reg_prof_s',
    type: DataType.STRING(30),
  })
  RegProfS: string;

  @AllowNull(false)
  @ApiModelProperty()
  @Column({
    field: 'tipo_id_paciente',
    type: DataType.STRING(2),
  })
  TipoIDPaciente: string;

  @AllowNull(false)
  @ApiModelProperty()
  @Column({
    field: 'nro_id_paciente',
    type: DataType.STRING(17),
  })
  NroIDPaciente: string;

  @AllowNull(false)
  @ApiModelProperty()
  @Column({
    field: 'pn_paciente',
    type: DataType.STRING(60),
  })
  PNPaciente: string;

  @ApiModelProperty()
  @Column({
    field: 'sn_paciente',
    type: DataType.STRING(60),
  })
  SNPaciente: string;

  @AllowNull(false)
  @ApiModelProperty()
  @Column({
    field: 'pa_paciente',
    type: DataType.STRING(60),
  })
  PAPaciente: string;

  @ApiModelProperty()
  @Column({
    field: 'sa_paciente',
    type: DataType.STRING(60),
  })
  SAPaciente: string;

  @ForeignKey(() => AmbitoAtencion)
  @AllowNull(false)
  @ApiModelProperty()
  @Column({ field: 'cod_amb_ate' })
  CodAmbAte: number;

  @ApiModelProperty()
  @Column({ field: 'ref_amb_ate' })
  RefAmbAte: number;

  @ApiModelProperty()
  @Column({ field: 'enf_huerfana' })
  EnfHuerfana: number;

  @ApiModelProperty()
  @Column({
    field: 'cod_enf_huerfana',
    type: DataType.STRING(4),
  })
  CodEnfHuerfana: string;

  @ApiModelProperty()
  @Column({ field: 'enf_huerfana_dx' })
  EnfHuerfanaDX: number;

  @ForeignKey(() => Cie10)
  @ApiModelProperty()
  @Column({
    field: 'cod_dx_ppal',
    type: DataType.STRING(4),
  })
  CodDxPpal: string;

  @ApiModelProperty()
  @Column({
    field: 'cod_dx_rel_1',
    type: DataType.STRING(4),
  })
  CodDxRel1: string;

  @ApiModelProperty()
  @Column({
    field: 'cod_dx_rel_2',
    type: DataType.STRING(4),
  })
  CodDxRel2: string;

  @ApiModelProperty()
  @Column({ field: 'sop_nutricional' })
  SopNutricional: number;

  @ApiModelProperty()
  @Column({
    field: 'cod_eps',
    type: DataType.STRING(6),
  })
  CodEPS: string;

  @ApiModelProperty()
  @Column({
    field: 'tipo_id_madre_paciente',
    type: DataType.STRING(2),
  })
  TipoIDMadrePaciente: string;

  @ApiModelProperty()
  @Column({
    field: 'nro_id_madre_paciente',
    type: DataType.STRING(17),
  })
  NroIDMadrePaciente: string;

  @ApiModelProperty()
  @Column({ field: 'tipo_transc' })
  TipoTransc: number;

  @ApiModelProperty()
  @Column({
    field: 'tipo_id_donante_vivo',
    type: DataType.STRING(2),
  })
  TipoIDDonanteVivo: string;

  @ApiModelProperty()
  @Column({
    field: 'nro_id_donante_vivo',
    type: DataType.STRING(17),
  })
  NroIDDonanteVivo: string;

  @AllowNull(false)
  @ApiModelProperty()
  @Column({ field: 'estado_prescripcion' })
  EstPres: number;

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

  @HasMany(() => PrescripcionDetalle)
  medicamentos: PrescripcionDetalle[];

  @HasMany(() => PrescripcionDetalle)
  procedimientos: PrescripcionDetalle[];

  @HasMany(() => PrescripcionDetalle)
  dispositivos: PrescripcionDetalle[];

  @HasMany(() => PrescripcionDetalle)
  productosnutricionales: PrescripcionDetalle[];

  @HasMany(() => PrescripcionDetalle)
  serviciosComplementarios: PrescripcionDetalle[];

  @HasMany(() => PrescripcionDetalle)
  prescripcionDetalle: PrescripcionDetalle[];

  @BelongsTo(() => AmbitoAtencion)
  ambitoAtencion: AmbitoAtencion;

  @BelongsTo(() => Municipio)
  municipio: Municipio;

  @BelongsTo(() => Cie10, {
    as: 'cie10',
    foreignKey: 'CodDxPpal',
    targetKey: 'codigo',
  })
  cie10: Cie10;
}

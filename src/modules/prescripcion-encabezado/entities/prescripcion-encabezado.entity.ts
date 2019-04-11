import { Table, Model, Column, PrimaryKey, DataType, Unique, AutoIncrement, AllowNull, ForeignKey, BelongsTo, HasMany } from 'sequelize-typescript';
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
  @Column(DataType.STRING('20'))
  NoPrescripcion: string;

  @AllowNull(false)
  @ApiModelProperty()
  @Column(DataType.DATE)
  FPrescripcion: string;

  @AllowNull(false)
  @ApiModelProperty()
  @Column(DataType.STRING('10'))
  HPrescripcion: string;

  @AllowNull(false)
  @ApiModelProperty()
  @Column(DataType.STRING('20'))
  CodHabIPS: string;

  @AllowNull(false)
  @ApiModelProperty()
  @Column(DataType.STRING('2'))
  TipoIDIPS: string;

  @AllowNull(false)
  @ApiModelProperty()
  @Column(DataType.STRING('17'))
  NroIDIPS: string;

  @ForeignKey(() => Municipio)
  @AllowNull(false)
  @ApiModelProperty()
  @Column(DataType.STRING('5'))
  CodDANEMunIPS: string;

  @AllowNull(false)
  @ApiModelProperty()
  @Column(DataType.STRING('300'))
  DirSedeIPS: string;

  @AllowNull(false)
  @ApiModelProperty()
  @Column(DataType.STRING('70'))
  TelSedeIPS: string;

  @AllowNull(false)
  @ApiModelProperty()
  @Column(DataType.STRING('2'))
  TipoIDProf: string;

  @AllowNull(false)
  @ApiModelProperty()
  @Column(DataType.STRING('17'))
  NumIDProf: string;

  @AllowNull(false)
  @ApiModelProperty()
  @Column(DataType.STRING('60'))
  PNProfS: string;

  @ApiModelProperty()
  @Column(DataType.STRING('60'))
  SNProfS: string;

  @AllowNull(false)
  @ApiModelProperty()
  @Column(DataType.STRING('60'))
  PAProfS: string;

  @ApiModelProperty()
  @Column(DataType.STRING('60'))
  SAProfS: string;

  @AllowNull(false)
  @ApiModelProperty()
  @Column(DataType.STRING('30'))
  RegProfS: string;

  @AllowNull(false)
  @ApiModelProperty()
  @Column(DataType.STRING('2'))
  TipoIDPaciente: string;

  @AllowNull(false)
  @ApiModelProperty()
  @Column(DataType.STRING('17'))
  NroIDPaciente: string;

  @AllowNull(false)
  @ApiModelProperty()
  @Column(DataType.STRING('60'))
  PNPaciente: string;

  @ApiModelProperty()
  @Column(DataType.STRING('60'))
  SNPaciente: string;

  @AllowNull(false)
  @ApiModelProperty()
  @Column(DataType.STRING('60'))
  PAPaciente: string;

  @ApiModelProperty()
  @Column(DataType.STRING('60'))
  SAPaciente: string;

  @ForeignKey(() => AmbitoAtencion)
  @AllowNull(false)
  @ApiModelProperty()
  @Column
  CodAmbAte: number;

  @ApiModelProperty()
  @Column
  RefAmbAte: number;

  @ApiModelProperty()
  @Column
  EnfHuerfana: number;

  @ApiModelProperty()
  @Column(DataType.STRING('4'))
  CodEnfHuerfana: string;

  @ApiModelProperty()
  @Column
  EnfHuerfanaDX: number;

  @ForeignKey(() => Cie10)
  @ApiModelProperty()
  @Column(DataType.STRING('4'))
  CodDxPpal: string;

  @ApiModelProperty()
  @Column(DataType.STRING('4'))
  CodDxRel1: string;

  @ApiModelProperty()
  @Column(DataType.STRING('4'))
  CodDxRel2: string;

  @ApiModelProperty()
  @Column
  SopNutricional: number;

  @ApiModelProperty()
  @Column(DataType.STRING('6'))
  CodEPS: string;

  @ApiModelProperty()
  @Column(DataType.STRING('2'))
  TipoIDMadrePaciente: string;

  @ApiModelProperty()
  @Column(DataType.STRING('17'))
  NroIDMadrePaciente: string;

  @ApiModelProperty()
  @Column
  TipoTransc: number;

  @ApiModelProperty()
  @Column(DataType.STRING('2'))
  TipoIDDonanteVivo: string;

  @ApiModelProperty()
  @Column(DataType.STRING('17'))
  NroIDDonanteVivo: string;

  @AllowNull(false)
  @ApiModelProperty()
  @Column
  EstPres: number;

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

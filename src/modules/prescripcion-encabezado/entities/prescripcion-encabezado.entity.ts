import { Table, Model, Column, PrimaryKey, DataType, Unique, AutoIncrement, AllowNull, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { AmbitoAtencion } from 'src/modules/ambito-atencion/entities/ambito-atencion.entity';
import { Municipio } from 'src/modules/municipio/entities/municipio';

@Table({
  timestamps: true,
  paranoid: true,
  tableName: 'mp_prescripcion_encabezado',
})
export class PrescripcionEncabezado extends Model<PrescripcionEncabezado> {

  @AutoIncrement
  @PrimaryKey
  @Column(DataType.BIGINT)
  id: number;

  @Unique
  @AllowNull(false)
  @Column(DataType.STRING('20'))
  NoPrescripcion: string;

  @AllowNull(false)
  @Column
  FPrescripcion: string;

  @AllowNull(false)
  @Column(DataType.STRING('10'))
  HPrescripcion: string;

  @AllowNull(false)
  @Column(DataType.STRING('20'))
  CodHabIPS: string;

  @AllowNull(false)
  @Column(DataType.STRING('2'))
  TipoIDIPS: string;

  @AllowNull(false)
  @Column(DataType.STRING('10'))
  NroIDIPS: string;

  @ForeignKey(() => Municipio)
  @AllowNull(false)
  @Column(DataType.STRING('5'))
  CodDANEMunIPS: string;

  @AllowNull(false)
  @Column(DataType.STRING('300'))
  DirSedeIPS: string;

  @AllowNull(false)
  @Column(DataType.STRING('70'))
  TelSedeIPS: string;

  @AllowNull(false)
  @Column(DataType.STRING('20'))
  TipoIDProf: string;

  @AllowNull(false)
  @Column(DataType.STRING('17'))
  NumIDProf: string;

  @AllowNull(false)
  @Column(DataType.STRING('60'))
  PNProfS: string;

  @Column(DataType.STRING('60'))
  SNProfS: string;

  @AllowNull(false)
  @Column(DataType.STRING('60'))
  PAProfS: string;

  @Column(DataType.STRING('60'))
  SAProfS: string;

  @AllowNull(false)
  @Column(DataType.STRING('30'))
  RegProfS: string;

  @AllowNull(false)
  @Column(DataType.STRING('20'))
  TipoIDPaciente: string;

  @AllowNull(false)
  @Column(DataType.STRING('17'))
  NroIDPaciente: string;

  @AllowNull(false)
  @Column(DataType.STRING('60'))
  PNPaciente: string;

  @Column(DataType.STRING('60'))
  SNPaciente: string;

  @AllowNull(false)
  @Column(DataType.STRING('60'))
  PAPaciente: string;

  @Column(DataType.STRING('60'))
  SAPaciente: string;

  @ForeignKey(() => AmbitoAtencion)
  @AllowNull(false)
  @Column
  CodAmbAte: number;

  @Column
  EnfHuerfana: number;

  @Column(DataType.STRING('4'))
  CodEnfHuerfana: string;

  @Column
  EnfHuerfanaDX: number;

  @Column(DataType.STRING('4'))
  CodDxPpal: string;

  @Column(DataType.STRING('4'))
  CodDxRel1: string;

  @Column(DataType.STRING('4'))
  CodDxRel2: string;

  @Column
  SopNutricional: number;

  @Column(DataType.STRING('20'))
  CodEPS: string;

  @Column(DataType.STRING('20'))
  TipoIDMadrePaciente: string;

  @Column(DataType.STRING('17'))
  NroIDMadrePaciente: string;

  @Column
  TipoTransc: number;

  @Column(DataType.STRING('20'))
  TipoIDDonanteVivo: string;

  @Column(DataType.STRING('17'))
  NroIDDonanteVivo: string;

  @AllowNull(false)
  @Column
  EstPres: number;

  @BelongsTo(() => AmbitoAtencion)
  ambitoAtencion: AmbitoAtencion;

  @BelongsTo(() => Municipio)
  municipio: Municipio;
}

import { Table, Model, PrimaryKey, Column, DataType, ForeignKey, BelongsTo, AutoIncrement } from 'sequelize-typescript';
import { ApiModelProperty } from '@nestjs/swagger';
import { PrescripcionDetalle } from 'src/modules/prescripcion-detalle/entities/prescripcion-detalle.entity';

@Table({
  timestamps: true,
  paranoid: true,
  tableName: 'mp_entrega_tecnologia',
})
export class Entrega extends Model<Entrega> {

  @PrimaryKey
  @AutoIncrement
  @Column(DataType.BIGINT)
  id: number;

  @ApiModelProperty()
  @Column
  IDEntrega: number;

  @ApiModelProperty()
  @Column(DataType.STRING('20'))
  NoPrescripcion: string;

  @ApiModelProperty()
  @Column(DataType.STRING('1'))
  TipoTec: string;

  @ApiModelProperty()
  @Column
  ConTec: number;

  @ApiModelProperty()
  @Column
  TipoIDPaciente: string;

  @ApiModelProperty()
  @Column
  NoIDPaciente: string;

  @ApiModelProperty()
  @Column
  NoEntrega: number;

  @ApiModelProperty()
  @Column
  CodSerTecEntregado: string;

  @ApiModelProperty()
  @Column
  CantTotEntregada: string;

  @ApiModelProperty()
  @Column
  EntTotal: number;

  @ApiModelProperty()
  @Column
  CausaNoEntrega: number;

  @ApiModelProperty()
  @Column
  FecEntreg: string;

  @ApiModelProperty()
  @Column
  NoLote: string;

  @ApiModelProperty()
  @ForeignKey(() => PrescripcionDetalle)
  @Column
  prescrpicionDetalleId: number;

  @BelongsTo(() => PrescripcionDetalle)
  prescripcionDetalle: PrescripcionDetalle;
}
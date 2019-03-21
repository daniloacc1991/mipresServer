import { Table, Model, PrimaryKey, Column, DataType, ForeignKey, BelongsTo, AutoIncrement, AllowNull, Scopes } from 'sequelize-typescript';
import { ApiModelProperty } from '@nestjs/swagger';
import { PrescripcionDetalle } from '../../../modules/prescripcion-detalle/entities/prescripcion-detalle.entity';

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
  @AllowNull(false)
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
  @Column(DataType.STRING(10))
  CantTotEntregada: string;

  @ApiModelProperty()
  @Column
  EntTotal: number;

  @ApiModelProperty()
  @Column
  CausaNoEntrega: number;

  @ApiModelProperty()
  @Column(DataType.DATE)
  FecEntrega: string;

  @ApiModelProperty()
  @Column
  NoLote: string;

  @ApiModelProperty()
  @ForeignKey(() => PrescripcionDetalle)
  @Column
  prescripcionDetalleId: number;

  @BelongsTo(() => PrescripcionDetalle)
  prescripcionDetalle: PrescripcionDetalle;
}

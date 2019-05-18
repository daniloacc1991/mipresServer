import { Table, Model, Column, DataType, ForeignKey, BelongsTo, AllowNull, HasOne } from 'sequelize-typescript';
import { ApiModelProperty } from '@nestjs/swagger';
import { PrescripcionDetalle } from '../../../modules/prescripcion-detalle/entities/prescripcion-detalle.entity';
import { ReporteEntrega } from '../../../modules/reporte-entrega/entities/reporte-entrega.entity';

@Table({
  timestamps: true,
  paranoid: true,
  tableName: 'mp_entrega_tecnologia',
})
export class Entrega extends Model<Entrega> {

  @HasOne( () => ReporteEntrega, {
    as: 'reporteEntrega',
    foreignKey: 'entrega_id',
    onDelete: 'CASCADE',
    constraints: true,
  })
  @Column({
    primaryKey: true,
    type: DataType.BIGINT,
  })
  id: number;

  @ApiModelProperty()
  @AllowNull(false)
  @Column
  IDEntrega: number;

  @ApiModelProperty()
  @AllowNull(false)
  @Column(DataType.STRING('20'))
  NoPrescripcion: string;

  @ApiModelProperty()
  @AllowNull(false)
  @Column(DataType.STRING('1'))
  TipoTec: string;

  @ApiModelProperty()
  @AllowNull(false)
  @Column
  ConTec: number;

  @ApiModelProperty()
  @AllowNull(false)
  @Column
  TipoIDPaciente: string;

  @ApiModelProperty()
  @AllowNull(false)
  @Column
  NoIDPaciente: string;

  @ApiModelProperty()
  @Column
  NoEntrega: number;

  @ApiModelProperty()
  @AllowNull(false)
  @Column
  CodSerTecEntregado: string;

  @ApiModelProperty()
  @AllowNull(false)
  @Column(DataType.STRING(10))
  CantTotEntregada: string;

  @ApiModelProperty()
  @AllowNull(false)
  @Column
  EntTotal: number;

  @ApiModelProperty()
  @Column
  CausaNoEntrega: number;

  @ApiModelProperty()
  @AllowNull(false)
  @Column({
    field: 'fecha_entrega',
    type: DataType.DATEONLY,
  })
  FecEntrega: string;

  @ApiModelProperty()
  @Column({
    allowNull: true,
    field: 'no_lote',
  })
  NoLote: string;

  @ApiModelProperty()
  @ForeignKey(() => PrescripcionDetalle)
  @Column({
    field: 'prescripcion_detalle_id',
    type: DataType.BIGINT,
  })
  prescripcionDetalleId: number;

  @BelongsTo(() => PrescripcionDetalle)
  prescripcionDetalle: PrescripcionDetalle;
}

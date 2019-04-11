import { Table, Model, PrimaryKey, AutoIncrement, Column, DataType, CreatedAt, UpdatedAt, DeletedAt } from 'sequelize-typescript';
import { ForeignKey, BelongsTo } from 'sequelize-typescript';
import { ApiModelProperty } from '@nestjs/swagger';
import { PrescripcionDetalle } from '../../../modules/prescripcion-detalle/entities/prescripcion-detalle.entity';

@Table({
  tableName: 'mp_medicamento_indicaciones_unirs',
  timestamps: true,
  paranoid: true,
})
export class MedicamentoIndicacionesUnirs extends Model<MedicamentoIndicacionesUnirs> {

  @ApiModelProperty()
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.BIGINT)
  id: number;

  @ApiModelProperty()
  @ForeignKey(() => PrescripcionDetalle)
  @Column({
    field: 'prescripcion_detalle_id',
    allowNull: false,
  })
  prescripcionDetalleId: number;

  @BelongsTo(() => PrescripcionDetalle)
  prescripcionDetalle: PrescripcionDetalle;

  @ApiModelProperty()
  @Column({
    field: 'consecutivo_orden',
    allowNull: false,
    comment: 'Consecutivo Orden Principio Activo',
  })
  ConOrden: number;

  @ApiModelProperty()
  @Column({
    field: 'codigo_indicacion',
    allowNull: false,
    type: DataType.STRING(5),
    comment: 'Código Indicación',
  })
  CodIndicacion: string;

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

}

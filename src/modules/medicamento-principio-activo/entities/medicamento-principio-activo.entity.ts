import { Table, Model, PrimaryKey, AutoIncrement, Column, DataType, CreatedAt, UpdatedAt, DeletedAt } from 'sequelize-typescript';
import { ForeignKey, BelongsTo } from 'sequelize-typescript';
import { ApiModelProperty } from '@nestjs/swagger';
import { PrescripcionDetalle } from '../../../modules/prescripcion-detalle/entities/prescripcion-detalle.entity';

@Table({
  tableName: 'mp_medicamento_principio_activo',
  paranoid: true,
  timestamps: true,
})
export class MedicamentoPrincipioActivo extends Model<MedicamentoPrincipioActivo> {

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
    field: 'codigo_principio_activo',
    allowNull: false,
    type: DataType.STRING(5),
    comment: 'Código Principio Activo en DCI',
  })
  CodPriAct: string;

  @ApiModelProperty()
  @Column({
    field: 'concentracion_cantidad',
    allowNull: false,
    type: DataType['DOUBLE PRECISION'],
    comment: 'Concentración Cantidad',
  })
  ConcCant: number;

  @ApiModelProperty()
  @Column({
    field: 'unidad_medida_concentracion',
    allowNull: false,
    type: DataType.STRING(4),
    comment: 'Unidad de medida Concentración',
  })
  UMedConc: string;

  @ApiModelProperty()
  @Column({
    field: 'cantidad_contenido',
    allowNull: false,
    type: DataType['DOUBLE PRECISION'],
    comment: 'Cantidad medicamento en principio activo',
  })
  CantCont: number;

  @ApiModelProperty()
  @Column({
    field: 'unidad_medida_cantidad_contenido',
    allowNull: false,
    type: DataType.STRING(4),
    comment: 'Unidad de medida del medicamento en el que está contenido el principio activo',
  })
  UMedCantCont: string;

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

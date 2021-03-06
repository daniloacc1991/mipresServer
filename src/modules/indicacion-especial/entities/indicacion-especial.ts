import { Table, DefaultScope, Model, AutoIncrement, PrimaryKey, Column, DataType, AllowNull, HasOne, CreatedAt, UpdatedAt, DeletedAt } from 'sequelize-typescript';
import { ApiModelProperty } from '@nestjs/swagger';
import { PrescripcionDetalle } from '../../../modules/prescripcion-detalle/entities/prescripcion-detalle.entity';

@DefaultScope({
  attributes: ['id', 'descripcion'],
})
@Table({
  timestamps: true,
  paranoid: true,
  tableName: 'mp_indicacion_especial',
})
export class IndicacionEspecial extends Model<IndicacionEspecial> {

  @ApiModelProperty()
  @AutoIncrement
  @PrimaryKey
  @HasOne(() => PrescripcionDetalle, {
    as: 'prescripcion_detalle_id',
    foreignKey: 'IndEsp',
    foreignKeyConstraint: false,
  })
  @Column
  id: number;

  @ApiModelProperty()
  @AllowNull(false)
  @Column
  descripcion: string;

  @ApiModelProperty()
  @AllowNull(false)
  @Column(DataType.BOOLEAN)
  habilitado: boolean;

  @ApiModelProperty()
  @AllowNull(false)
  @Column(DataType.DATE)
  fecha: string;

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

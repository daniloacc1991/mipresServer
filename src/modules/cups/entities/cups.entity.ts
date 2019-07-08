import { Table, Model, PrimaryKey, Column, DataType, HasOne, AllowNull, CreatedAt, UpdatedAt, DeletedAt } from 'sequelize-typescript';
import { PrescripcionDetalle } from '../../../modules/prescripcion-detalle/entities/prescripcion-detalle.entity';
import { ApiModelProperty } from '@nestjs/swagger';

@Table({
  timestamps: true,
  paranoid: true,
  tableName: 'mp_cups',
})
export class Cups extends Model<Cups> {

  @PrimaryKey
  @HasOne( () => PrescripcionDetalle, {
    as: 'cups_id',
    foreignKey: 'CodCUPS',
    onDelete: 'CASCADE',
    constraints: true,
  })
  @ApiModelProperty()
  @Column(DataType.STRING('6'))
  id: string;

  @AllowNull(false)
  @ApiModelProperty()
  @Column
  descripcion: string;

  @AllowNull(false)
  @ApiModelProperty()
  @Column
  habilitado: boolean;

  @ApiModelProperty()
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

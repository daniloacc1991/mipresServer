import { Table, Model, PrimaryKey, Column, DataType, HasOne, AllowNull, Length, DefaultScope, CreatedAt, UpdatedAt, DeletedAt } from 'sequelize-typescript';
import { PrescripcionDetalle } from '../../../modules/prescripcion-detalle/entities/prescripcion-detalle.entity';
import { ApiModelProperty } from '@nestjs/swagger';

@DefaultScope({
  attributes: ['id', 'descripcion'],
})
@Table({
  timestamps: true,
  paranoid: true,
  tableName: 'mp_forma_farmaceutica',
})
export class FormaFarmaceutica extends Model<FormaFarmaceutica> {

  @Length({
    msg: 'El codigo no puede ser mayor a 20 caracteres',
    min: 5,
    max: 8,
  })
  @PrimaryKey
  @HasOne(() => PrescripcionDetalle, {
    as: 'forma_farmaceutica_id',
    foreignKey: 'CodFF',
    onDelete: 'CASCADE',
    constraints: true,
  })
  @ApiModelProperty({
    maxLength: 8,
  })
  @Column(DataType.STRING('8'))
  id: string;

  @AllowNull(false)
  @ApiModelProperty()
  @Column
  descripcion: string;

  @AllowNull(false)
  @ApiModelProperty()
  @Column
  habilitado: number;

  @AllowNull(false)
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

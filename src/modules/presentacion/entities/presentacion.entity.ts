import { Table, Model, PrimaryKey, Column, DataType, DefaultScope, CreatedAt, UpdatedAt, DeletedAt } from 'sequelize-typescript';
import { ApiModelProperty } from '@nestjs/swagger';

@DefaultScope({
  attributes: ['id', 'descripcion'],
})
@Table({
  timestamps: true,
  paranoid: true,
  tableName: 'mp_presentacion',
})
export class Presentacion extends Model<Presentacion> {

  @PrimaryKey
  @ApiModelProperty()
  @Column(DataType.STRING(2))
  id: string;

  @ApiModelProperty()
  @Column
  descripcion: string;

  @ApiModelProperty()
  @Column
  habilitado: number;

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

import { DefaultScope, Table, Model, PrimaryKey, AllowNull, Column, DataType, CreatedAt, UpdatedAt, DeletedAt } from 'sequelize-typescript';
import { ApiModelProperty } from '@nestjs/swagger';

@DefaultScope({
  attributes: ['id', 'descripcion'],
})
@Table({
  timestamps: true,
  paranoid: true,
  tableName: 'mp_frecuencia',
})
export class Frecuencia extends Model<Frecuencia> {

  @ApiModelProperty()
  @PrimaryKey
  @AllowNull(false)
  @Column
  id: number;

  @ApiModelProperty()
  @Column
  descripcion: string;

  @ApiModelProperty()
  @Column(DataType.BOOLEAN)
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

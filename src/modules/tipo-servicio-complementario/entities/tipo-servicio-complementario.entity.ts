import { Table, Model, PrimaryKey, Column, DataType, AutoIncrement, Unique, AllowNull, Default, DefaultScope } from 'sequelize-typescript';
import { CreatedAt, UpdatedAt, DeletedAt } from 'sequelize-typescript';
import { ApiModelProperty } from '@nestjs/swagger';

@DefaultScope({
  attributes: ['codigo', 'descripcion'],
})
@Table({
  timestamps: true,
  paranoid: true,
  tableName: 'mp_tipo_servicio_complementario',
})
export class TipoServicioComplementario extends Model<TipoServicioComplementario> {

  @ApiModelProperty()
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number;

  @Unique
  @Column(DataType.STRING('2'))
  codigo: string;

  @ApiModelProperty()
  @Column
  descripcion: string;

  @ApiModelProperty()
  @AllowNull(false)
  @Default(true)
  @Column(DataType.BOOLEAN)
  habilitado: boolean;

  @ApiModelProperty()
  @AllowNull(false)
  @Column(DataType.STRING(20))
  version: string;

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

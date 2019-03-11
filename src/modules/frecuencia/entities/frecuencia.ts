import { DefaultScope, Table, Model, PrimaryKey, AllowNull, Column, DataType } from 'sequelize-typescript';
import { ApiModelProperty } from '@nestjs/swagger';

@DefaultScope({
  attributes: ['codigo', 'descripcion'],
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
}

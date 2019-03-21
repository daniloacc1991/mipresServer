import { Table, Model, PrimaryKey, Column, DataType, HasOne, DefaultScope } from 'sequelize-typescript';
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
  @Column(DataType.STRING('2'))
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
}

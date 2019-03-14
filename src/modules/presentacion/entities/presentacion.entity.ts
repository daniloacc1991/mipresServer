import { Table, Model, PrimaryKey, Column, DataType, HasOne } from 'sequelize-typescript';
import { ApiModelProperty } from '@nestjs/swagger';

@Table({
  timestamps: true,
  paranoid: true,
  tableName: 'mp_presentacion',
})
export class Presentacion extends Model<Presentacion> {

  @PrimaryKey
  @ApiModelProperty()
  @Column(DataType.STRING('10'))
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

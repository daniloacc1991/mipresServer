import { Table, DefaultScope, Model, AutoIncrement, PrimaryKey, Column, DataType, AllowNull } from 'sequelize-typescript';
import { ApiModelProperty } from '@nestjs/swagger';

@DefaultScope({
  attributes: ['codigo', 'descripcion'],
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
}

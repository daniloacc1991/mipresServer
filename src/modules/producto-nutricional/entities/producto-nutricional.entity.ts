import { Table, DefaultScope, Model, AutoIncrement, PrimaryKey, Column, DataType, AllowNull, Unique, Default } from 'sequelize-typescript';
import { ApiModelProperty } from '@nestjs/swagger';

@DefaultScope({
  attributes: [
    'id',
    'codigo',
    'nombreComercial',
    'grupoNivel1',
    'forma',
    'presentacionComercial',
    'unidades',
  ],
})
@Table({
  timestamps: true,
  paranoid: true,
  tableName: 'mp_producto_nutricional',
})
export class ProductoNutricional extends Model<ProductoNutricional> {

  @ApiModelProperty()
  @AutoIncrement
  @PrimaryKey
  @Column(DataType.BIGINT)
  id: number;

  @ApiModelProperty()
  @AllowNull(false)
  @Unique
  @Column(DataType.STRING(6))
  codigo: string;

  @ApiModelProperty()
  @AllowNull(false)
  @Column
  nombreComercial: string;

  @ApiModelProperty()
  @AllowNull(false)
  @Column
  grupoNivel1: string;

  @ApiModelProperty()
  @AllowNull(false)
  @Column(DataType.STRING(100))
  forma: string;

  @ApiModelProperty()
  @AllowNull(false)
  @Column(DataType.DOUBLE)
  presentacionComercial: number;

  @ApiModelProperty()
  @AllowNull(false)
  @Column(DataType.STRING(20))
  unidades: string;

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
}

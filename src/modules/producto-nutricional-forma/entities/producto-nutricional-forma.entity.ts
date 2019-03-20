import { Table, DefaultScope, Model, PrimaryKey, Column, DataType, AllowNull, Default, HasOne } from 'sequelize-typescript';
import { ApiModelProperty } from '@nestjs/swagger';
import { PrescripcionDetalle } from 'src/modules/prescripcion-detalle/entities/prescripcion-detalle.entity';

@DefaultScope({
  attributes: ['id', 'descripcion'],
})
@Table({
  tableName: 'mp_producto_nutricional_forma',
  timestamps: true,
  paranoid: true,
})
export class ProductoNutricionalForma extends Model<ProductoNutricionalForma> {

  @ApiModelProperty()
  @HasOne(() => PrescripcionDetalle, {
    as: 'CodForma',
    foreignKey: 'CodForma',
    onDelete: 'CASCADE',
    constraints: true,
  })
  @PrimaryKey
  @Column
  id: number;

  @ApiModelProperty()
  @Column(DataType.STRING('50'))
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
}

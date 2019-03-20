import { Table, Model, PrimaryKey, HasOne, Column, DataType } from 'sequelize-typescript';
import { ApiModelProperty } from '@nestjs/swagger';
import { PrescripcionDetalle } from '../../../modules/prescripcion-detalle/entities/prescripcion-detalle.entity';

@Table({
  timestamps: true,
  paranoid: true,
  tableName: 'mp_tipo_producto_nutricional',
})
export class TipoProductoNutricional extends Model<TipoProductoNutricional> {

  @PrimaryKey
  @HasOne(() => PrescripcionDetalle, {
    as: 'tipo_producto_nutricional_id',
    foreignKey: 'TippProNut',
    onDelete: 'CASCADE',
    constraints: true,
  })
  @Column(DataType.STRING('30'))
  id: string;

  @ApiModelProperty()
  @Column
  descripcion: string;

  @ApiModelProperty()
  @Column
  habititado: number;

  @ApiModelProperty()
  @Column(DataType.DATE)
  fecha: string;
}

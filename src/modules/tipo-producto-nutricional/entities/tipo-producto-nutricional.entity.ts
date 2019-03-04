import { Table, Model, PrimaryKey, HasOne, Column, DataType } from 'sequelize-typescript';
import { PrescripcionDetalle } from 'src/modules/prescripcion-detalle/entities/prescripcion-detalle.entity';

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

  @Column
  descripcion: string;

  @Column
  habititado: number;

  @Column(DataType.DATE)
  fecha: string;
}

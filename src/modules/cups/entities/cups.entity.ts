import { Table, Model, PrimaryKey, Column, DataType, HasOne } from 'sequelize-typescript';
import { PrescripcionDetalle } from 'src/modules/prescripcion-detalle/entities/prescripcion-detalle.entity';

@Table({
  timestamps: true,
  paranoid: true,
  tableName: 'mp_cups',
})
export class Cups extends Model<Cups> {

  @PrimaryKey
  @HasOne( () => PrescripcionDetalle, {
    as: 'cups_id',
    foreignKey: 'CodCUPS',
    onDelete: 'CASCADE',
    constraints: true,
  })
  @Column(DataType.STRING('6'))
  id: string;

  @Column
  descripcion: string;

  @Column
  habilitado: boolean;

  @Column(DataType.DATE)
  fecha: string;
}

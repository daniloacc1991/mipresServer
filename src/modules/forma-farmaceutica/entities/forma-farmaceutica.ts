import { Table, Model, PrimaryKey, Column, DataType, HasOne } from 'sequelize-typescript';
import { PrescripcionDetalle } from 'src/modules/prescripcion-detalle/entities/prescripcion-detalle.entity';

@Table({
  timestamps: true,
  paranoid: true,
  tableName: 'mp_forma_farmaceutica',
})
export class FormaFarmaceutica extends Model<FormaFarmaceutica> {

  @PrimaryKey
  @HasOne(() => PrescripcionDetalle, {
    as: 'forma_farmaceutica_id',
    foreignKey: 'CodFF',
    onDelete: 'CASCADE',
    constraints: true,
  })
  @Column(DataType.STRING('20'))
  id: string;

  @Column
  descripcion: string;

  @Column
  habilitado: number;

  @Column(DataType.DATE)
  fecha: string;
}

import { Table, Model, PrimaryKey, Column, DataType, HasOne } from 'sequelize-typescript';
import { PrescripcionDetalle } from 'src/modules/prescripcion-detalle/entities/prescripcion-detalle.entity';

@Table({
  timestamps: true,
  paranoid: true,
  tableName: 'mp_presentacion',
})
export class Presentacion extends Model<Presentacion> {
  @PrimaryKey
  @HasOne( () => PrescripcionDetalle, {
    as: 'presentacion_id',
    foreignKey: 'UFCantTotal',
    onDelete: 'CASCADE',
    constraints: true,
  })
  @Column(DataType.STRING('10'))
  id: string;

  @Column
  descripcion: string;

  @Column
  habilitado: number;

  @Column(DataType.DATE)
  fecha: string;
}

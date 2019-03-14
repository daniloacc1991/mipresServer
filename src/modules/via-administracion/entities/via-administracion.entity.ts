import { Table, Model, PrimaryKey, Column, DataType, HasOne } from 'sequelize-typescript';
import { PrescripcionDetalle } from '../../../modules/prescripcion-detalle/entities/prescripcion-detalle.entity';

@Table({
  timestamps: true,
  paranoid: true,
  tableName: 'mp_via_administracion',
})
export class ViaAdministracion extends Model<ViaAdministracion> {

  @PrimaryKey
  @HasOne( () => PrescripcionDetalle, {
    as: 'via_administracion_id',
    foreignKey: 'CodVA',
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

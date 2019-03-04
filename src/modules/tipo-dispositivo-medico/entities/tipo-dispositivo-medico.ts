import { Table, Model, PrimaryKey, HasOne, Column, DataType } from 'sequelize-typescript';
import { PrescripcionDetalle } from 'src/modules/prescripcion-detalle/entities/prescripcion-detalle.entity';

@Table({
  timestamps: true,
  paranoid: true,
  tableName: 'mp_tipo_dispositivos_medicos',
})
export class TipoDispositivoMedico extends Model<TipoDispositivoMedico> {
  @PrimaryKey
  @HasOne( () => PrescripcionDetalle, {
    as: 'tipo_dispositivo_medico_id',
    foreignKey: 'CodDisp',
    onDelete: 'CASCADE',
    constraints: true,
  })
  @Column(DataType.STRING('10'))
  id: string;

  @Column
  descripcion: string;

  @Column
  habititado: number;

  @Column(DataType.DATE)
  fecha: string;
}

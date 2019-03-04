import { Table, Model, PrimaryKey, Column, DataType, HasOne } from 'sequelize-typescript';
import { PrescripcionDetalle } from 'src/modules/prescripcion-detalle/entities/prescripcion-detalle.entity';

@Table({
  timestamps: true,
  paranoid: true,
  tableName: 'mp_unidad_medida_dosis',
})
export class UnidadMedidaDosis extends Model<UnidadMedidaDosis> {

  @PrimaryKey
  @HasOne( () => PrescripcionDetalle, {
    as: 'unidad_medida_dosis_id',
    foreignKey: 'DosisUM',
    onDelete: 'CASCADE',
    constraints: true,
  })
  @Column(DataType.STRING('10'))
  id: string;

  @Column(DataType.STRING('50'))
  unidadMedidcaPrincipioActivo: string;

  @Column
  descripcion: string;

  @Column
  habititado: number;

  @Column(DataType.DATE)
  fecha: string;
}

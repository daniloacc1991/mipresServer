import { Table, Model, PrimaryKey, Column, DataType, HasOne } from 'sequelize-typescript';
import { PrescripcionEncabezado } from 'src/modules/prescripcion-encabezado/entities/prescripcion-encabezado.entity';

@Table({
  timestamps: true,
  paranoid: true,
  tableName: 'mp_municipio',
})
export class Municipio extends Model<Municipio> {

  @HasOne(() => PrescripcionEncabezado, {
    as: 'municipio_id',
    foreignKey: 'CodDANEMunIPS',
    onDelete: 'CASCADE',
    constraints: true,
  })
  @PrimaryKey
  @Column(DataType.STRING('5'))
  id: string;

  @Column(DataType.STRING('100'))
  descripcion: string;

  @Column(DataType.STRING('100'))
  departamento: string;

  @Column(DataType.STRING('10'))
  amenazaSismica: string;

  @Column
  categoriaMunicipal: number;

  @Column(DataType.STRING('2'))
  certificado: string;

  @Column
  indicativo: number;

}

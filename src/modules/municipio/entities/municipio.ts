import { Table, Model, PrimaryKey, Column, DataType, HasOne } from 'sequelize-typescript';
import { PrescripcionEncabezado } from 'src/modules/prescripcion-encabezado/entities/prescripcion-encabezado.entity';
import { ApiModelProperty } from '@nestjs/swagger';

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
  @ApiModelProperty()
  @Column(DataType.STRING('5'))
  id: string;

  @ApiModelProperty()
  @Column(DataType.STRING('100'))
  descripcion: string;

  @ApiModelProperty()
  @Column(DataType.STRING('100'))
  departamento: string;

  @ApiModelProperty()
  @Column(DataType.STRING('10'))
  amenazaSismica: string;

  @ApiModelProperty()
  @Column
  categoriaMunicipal: number;

  @ApiModelProperty()
  @Column(DataType.STRING('2'))
  certificado: string;

  @ApiModelProperty()
  @Column
  indicativo: number;

}

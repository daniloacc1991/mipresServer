import { Table, Model, PrimaryKey, Column, DataType, HasOne, DefaultScope, CreatedAt, UpdatedAt, DeletedAt } from 'sequelize-typescript';
import { PrescripcionEncabezado } from '../../../modules/prescripcion-encabezado/entities/prescripcion-encabezado.entity';
import { ApiModelProperty } from '@nestjs/swagger';

@DefaultScope({
  attributes: ['id', 'descripcion', 'departamento'],
})
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
  @Column({
    field: 'amezana_sismica',
    type: DataType.STRING('10'),
  })
  amenazaSismica: string;

  @ApiModelProperty()
  @Column({
    field: 'categoria_municipal',
  })
  categoriaMunicipal: number;

  @ApiModelProperty()
  @Column(DataType.STRING('2'))
  certificado: string;

  @ApiModelProperty()
  @Column
  indicativo: number;

  @ApiModelProperty()
  @CreatedAt
  @Column({
    field: 'created_at',
    type: 'timestamp without time zone',
  })
  createdAt: string;

  @ApiModelProperty()
  @UpdatedAt
  @Column({
    field: 'updated_at',
    type: 'timestamp without time zone',
  })
  updatedAt: string;

  @ApiModelProperty()
  @DeletedAt
  @Column({
    field: 'deleted_at',
    type: 'timestamp without time zone',
  })
  deletedAt: string;

}

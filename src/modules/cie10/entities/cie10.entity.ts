import { Table, Model, PrimaryKey, Column, DataType, HasMany, AllowNull, AutoIncrement, Unique, DefaultScope, CreatedAt, UpdatedAt, DeletedAt } from 'sequelize-typescript';
import { ApiModelProperty } from '@nestjs/swagger';
import { PrescripcionEncabezado } from '../../../modules/prescripcion-encabezado/entities/prescripcion-encabezado.entity';

@DefaultScope({
  attributes: ['id', 'codigo', 'descripcion'],
})
@Table({
  timestamps: true,
  paranoid: true,
  tableName: 'mp_cie10',
})
export class Cie10 extends Model<Cie10> {

  @ApiModelProperty()
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.BIGINT)
  id: number;

  @Unique
  @ApiModelProperty()
  @Column(DataType.STRING('4'))
  codigo: string;

  @AllowNull(false)
  @Column
  @ApiModelProperty()
  descripcion: string;

  @Column(DataType.BOOLEAN)
  @ApiModelProperty()
  habilitado: boolean;

  @Column(DataType.DATE)
  @ApiModelProperty()
  fecha: boolean;
  
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

  @HasMany(() => PrescripcionEncabezado, {
    as: 'prescripciones_fk',
    foreignKey: 'CodDxPpal',
    constraints: true,
    sourceKey: 'codigo',
  })
  prescripciones: PrescripcionEncabezado[];

}

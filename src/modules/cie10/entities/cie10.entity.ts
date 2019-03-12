import { Table, Model, PrimaryKey, Column, DataType, HasMany, AllowNull, AutoIncrement, Unique, DefaultScope } from 'sequelize-typescript';
import { ApiModelProperty } from '@nestjs/swagger';
import { PrescripcionEncabezado } from 'src/modules/prescripcion-encabezado/entities/prescripcion-encabezado.entity';

@DefaultScope({
  attributes: ['codigo', 'descripcion'],
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

  @HasMany(() => PrescripcionEncabezado, {
    as: 'prescripciones_fk',
    foreignKey: 'CodDxPpal',
    constraints: true,
    sourceKey: 'codigo',
  })
  prescripciones: PrescripcionEncabezado[];
}

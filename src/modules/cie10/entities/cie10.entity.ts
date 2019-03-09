import { Table, Model, PrimaryKey, Column, DataType, HasOne, AllowNull } from 'sequelize-typescript';
import { ApiModelProperty } from '@nestjs/swagger';
import { PrescripcionEncabezado } from 'src/modules/prescripcion-encabezado/entities/prescripcion-encabezado.entity';

@Table({
  timestamps: true,
  paranoid: true,
  tableName: 'mp_cie10',
})
export class Cie10 extends Model<Cie10> {

  @PrimaryKey
  @HasOne(() => PrescripcionEncabezado, {
    as: 'CodDxPpal_id',
    foreignKey: 'CodDxPpal',
    onDelete: 'CASCADE',
    constraints: true,
  })
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
}

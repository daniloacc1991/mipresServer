import { Table, Model, PrimaryKey, Column, DataType, HasOne, AllowNull } from 'sequelize-typescript';
import { PrescripcionDetalle } from 'src/modules/prescripcion-detalle/entities/prescripcion-detalle.entity';
import { ApiModelProperty } from '@nestjs/swagger';

@Table({
  timestamps: true,
  paranoid: true,
  tableName: 'mp_cups',
})
export class Cups extends Model<Cups> {

  @PrimaryKey
  @HasOne( () => PrescripcionDetalle, {
    as: 'cups_id',
    foreignKey: 'CodCUPS',
    onDelete: 'CASCADE',
    constraints: true,
  })
  @ApiModelProperty()
  @Column(DataType.STRING('6'))
  id: string;

  @AllowNull(false)
  @ApiModelProperty()
  @Column
  descripcion: string;

  @AllowNull(false)
  @ApiModelProperty()
  @Column
  habilitado: boolean;

  @ApiModelProperty()
  @Column(DataType.DATE)
  fecha: string;
}

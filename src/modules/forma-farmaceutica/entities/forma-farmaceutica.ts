import { Table, Model, PrimaryKey, Column, DataType, HasOne, AllowNull, Length } from 'sequelize-typescript';
import { PrescripcionDetalle } from 'src/modules/prescripcion-detalle/entities/prescripcion-detalle.entity';
import { ApiModelProperty } from '@nestjs/swagger';

@Table({
  timestamps: true,
  paranoid: true,
  tableName: 'mp_forma_farmaceutica',
})
export class FormaFarmaceutica extends Model<FormaFarmaceutica> {

  @Length({
    msg: 'El codigo no puede ser mayor a 20 caracteres',
    min: 5,
    max: 20,
  })
  @PrimaryKey
  @HasOne(() => PrescripcionDetalle, {
    as: 'forma_farmaceutica_id',
    foreignKey: 'CodFF',
    onDelete: 'CASCADE',
    constraints: true,
  })
  @ApiModelProperty({
    maxLength: 20,
  })
  @Column(DataType.STRING('20'))
  id: string;

  @AllowNull(false)
  @ApiModelProperty()
  @Column
  descripcion: string;

  @AllowNull(false)
  @ApiModelProperty()
  @Column
  habilitado: number;

  @AllowNull(false)
  @ApiModelProperty()
  @Column(DataType.DATE)
  fecha: string;
}

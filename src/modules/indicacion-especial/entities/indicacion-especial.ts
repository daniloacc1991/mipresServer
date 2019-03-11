import { Table, DefaultScope, Model, AutoIncrement, PrimaryKey, Column, DataType, AllowNull, HasOne } from 'sequelize-typescript';
import { ApiModelProperty } from '@nestjs/swagger';
import { PrescripcionDetalle } from 'src/modules/prescripcion-detalle/entities/prescripcion-detalle.entity';

@DefaultScope({
  attributes: ['codigo', 'descripcion'],
})
@Table({
  timestamps: true,
  paranoid: true,
  tableName: 'mp_indicacion_especial',
})
export class IndicacionEspecial extends Model<IndicacionEspecial> {

  @ApiModelProperty()
  @AutoIncrement
  @PrimaryKey
  @HasOne(() => PrescripcionDetalle, {
    as: 'prescripcion_detalle_id',
    foreignKey: 'IndEsp',
    foreignKeyConstraint: false,
  })
  @Column
  id: number;

  @ApiModelProperty()
  @AllowNull(false)
  @Column
  descripcion: string;

  @ApiModelProperty()
  @AllowNull(false)
  @Column(DataType.BOOLEAN)
  habilitado: boolean;

  @ApiModelProperty()
  @AllowNull(false)
  @Column(DataType.DATE)
  fecha: string;
}

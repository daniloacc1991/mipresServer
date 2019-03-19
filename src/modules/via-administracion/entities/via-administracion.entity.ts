import { Table, Model, PrimaryKey, Column, DataType, HasOne, DefaultScope } from 'sequelize-typescript';
import { PrescripcionDetalle } from '../../../modules/prescripcion-detalle/entities/prescripcion-detalle.entity';
import { ApiModelProperty } from '@nestjs/swagger';

@DefaultScope({
  attributes: ['id', 'descripcion'],
})
@Table({
  timestamps: true,
  paranoid: true,
  tableName: 'mp_via_administracion',
})
export class ViaAdministracion extends Model<ViaAdministracion> {

  @ApiModelProperty()
  @PrimaryKey
  @HasOne( () => PrescripcionDetalle, {
    as: 'via_administracion_id',
    foreignKey: 'CodVA',
    onDelete: 'CASCADE',
    constraints: true,
  })
  @Column(DataType.STRING('10'))
  id: string;

  @ApiModelProperty()
  @Column
  descripcion: string;

  @ApiModelProperty()
  @Column
  habilitado: number;

  @ApiModelProperty()
  @Column(DataType.DATE)
  fecha: string;
}

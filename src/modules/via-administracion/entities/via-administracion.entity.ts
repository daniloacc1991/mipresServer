import { Table, Model, PrimaryKey, Column, DataType, HasOne, DefaultScope } from 'sequelize-typescript';
import { CreatedAt, UpdatedAt, DeletedAt } from 'sequelize-typescript';
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
  @Column(DataType.STRING('3'))
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

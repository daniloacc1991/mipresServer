import { Table, Model, PrimaryKey, Column, DataType, HasOne, AllowNull, DefaultScope } from 'sequelize-typescript';
import { CreatedAt, UpdatedAt, DeletedAt } from 'sequelize-typescript';
import { PrescripcionDetalle } from '../../../modules/prescripcion-detalle/entities/prescripcion-detalle.entity';
import { ApiModelProperty } from '@nestjs/swagger';

@DefaultScope({
  attributes: ['id', 'unidadMedidcaPrincipioActivo', 'descripcion'],
})
@Table({
  timestamps: true,
  paranoid: true,
  tableName: 'mp_unidad_medida_dosis',
})
export class UnidadMedidaDosis extends Model<UnidadMedidaDosis> {

  @PrimaryKey
  @HasOne( () => PrescripcionDetalle, {
    as: 'unidad_medida_dosis_id',
    foreignKey: 'DosisUM',
    onDelete: 'CASCADE',
    constraints: true,
  })
  @AllowNull(false)
  @Column(DataType.STRING('4'))
  @ApiModelProperty()
  id: string;

  @AllowNull(false)
  @Column(DataType.STRING('50'))
  @ApiModelProperty()
  unidadMedidcaPrincipioActivo: string;

  @AllowNull(false)
  @Column
  @ApiModelProperty()
  descripcion: string;

  @AllowNull(false)
  @Column
  @ApiModelProperty()
  habititado: number;

  @AllowNull(false)
  @Column(DataType.DATE)
  @ApiModelProperty()
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

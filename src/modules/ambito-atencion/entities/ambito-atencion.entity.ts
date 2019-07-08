import { Table, Model, PrimaryKey, Column, DataType, HasOne, DefaultScope, CreatedAt, UpdatedAt, DeletedAt } from 'sequelize-typescript';
import { ApiModelProperty } from '@nestjs/swagger';
import { PrescripcionEncabezado } from '../../../modules/prescripcion-encabezado/entities/prescripcion-encabezado.entity';

@DefaultScope({
  attributes: ['id', 'descripcion'],
})
@Table({
  timestamps: true,
  paranoid: true,
  tableName: 'mp_ambito_atencion',
})
export class AmbitoAtencion extends Model<AmbitoAtencion> {

  @HasOne( () => PrescripcionEncabezado, {
    as: 'ambito_atencion_id',
    foreignKey: 'CodAmbAte',
    onDelete: 'CASCADE',
    constraints: true,
  })
  @PrimaryKey
  @Column
  @ApiModelProperty()
  id: number;

  @Column(DataType.STRING('50'))
  @ApiModelProperty()
  descripcion: string;

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

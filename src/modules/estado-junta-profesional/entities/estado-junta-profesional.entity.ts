import { Table, Model, PrimaryKey, AllowNull, Column, HasMany, CreatedAt, UpdatedAt, DeletedAt } from 'sequelize-typescript';
import { ApiModelProperty } from '@nestjs/swagger';
import { PrescripcionDetalle } from '../../../modules/prescripcion-detalle/entities/prescripcion-detalle.entity';

@Table({
  tableName: 'mp_estado_junta_profesional',
  timestamps: true,
  paranoid: true,
})
export class EstadoJuntaProfesional extends Model<EstadoJuntaProfesional> {

  @ApiModelProperty()
  @PrimaryKey
  @AllowNull(false)
  @Column
  id: number;

  @ApiModelProperty()
  @AllowNull(false)
  @Column
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

  @HasMany(() => PrescripcionDetalle)
  prescripciones: PrescripcionDetalle;
}

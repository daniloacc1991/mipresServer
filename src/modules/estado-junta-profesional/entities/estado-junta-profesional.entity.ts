import { Table, Model, PrimaryKey, AllowNull, Column, HasMany } from 'sequelize-typescript';
import { ApiModelProperty } from '@nestjs/swagger';
import { PrescripcionDetalle } from 'src/modules/prescripcion-detalle/entities/prescripcion-detalle.entity';

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

  @HasMany(() => PrescripcionDetalle)
  prescripciones: PrescripcionDetalle;
}

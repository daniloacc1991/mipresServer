import { Table, Model, PrimaryKey, HasOne, Column, DataType, AllowNull } from 'sequelize-typescript';
import { CreatedAt, UpdatedAt, DeletedAt } from 'sequelize-typescript';
import { PrescripcionDetalle } from '../../../modules/prescripcion-detalle/entities/prescripcion-detalle.entity';
import { ApiModelProperty } from '@nestjs/swagger';

@Table({
  timestamps: true,
  paranoid: true,
  tableName: 'mp_tipo_dispositivos_medicos',
})
export class TipoDispositivoMedico extends Model<TipoDispositivoMedico> {
  @PrimaryKey
  @HasOne( () => PrescripcionDetalle, {
    as: 'tipo_dispositivo_medico_id',
    foreignKey: 'CodDisp',
    onDelete: 'CASCADE',
    constraints: true,
  })
  @AllowNull(false)
  @ApiModelProperty()
  @Column(DataType.STRING('3'))
  id: string;

  @AllowNull(false)
  @ApiModelProperty()
  @Column
  descripcion: string;

  @AllowNull(false)
  @ApiModelProperty()
  @Column
  habititado: number;

  @AllowNull(false)
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

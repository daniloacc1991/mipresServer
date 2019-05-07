import { Table, Model, Column, PrimaryKey, CreatedAt, UpdatedAt, DeletedAt, HasMany } from 'sequelize-typescript';
import { ApiModelProperty } from '@nestjs/swagger';
import { CausaNoEntregaTipoTecnologia } from '../../../modules/causa-no-entrega-tipo-tecnologia/entites/causa-no-entrega-tipo-tecnologia.entity';

@Table({
  tableName: 'mp_causa_no_entrega',
  timestamps: true,
  paranoid: true,
})
export class CausaNoEntrega extends Model<CausaNoEntrega> {

  @ApiModelProperty()
  @PrimaryKey
  @Column({
    field: 'id',
    allowNull: false,
  })
  id: number;

  @ApiModelProperty()
  @Column({
    field: 'descripcion',
    allowNull: false,
  })
  descripcion: string;

  @ApiModelProperty()
  @Column({
    field: 'aplica_para',
    allowNull: false,
  })
  aplicaPara: number;

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

  tipoTecnologia: {
    dispositivoMedico: boolean;
    medicamento: boolean;
    procedimiento: boolean;
    servicioComplementario: boolean;
    soporteNutricional: boolean;
  };

  @HasMany(() => CausaNoEntregaTipoTecnologia)
  causasNoEntregaTipoTecnologia: CausaNoEntregaTipoTecnologia[];

}

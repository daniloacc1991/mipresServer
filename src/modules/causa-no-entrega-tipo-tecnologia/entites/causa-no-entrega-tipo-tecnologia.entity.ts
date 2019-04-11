import { Table, Model, AutoIncrement, PrimaryKey, Column, DataType, BelongsTo, ForeignKey } from 'sequelize-typescript';
import { CreatedAt, UpdatedAt, DeletedAt } from 'sequelize-typescript';
import { ApiModelProperty } from '@nestjs/swagger';
import { CausaNoEntrega } from '../../../modules/causa-no-entrega/entities/causa-no-entrega.entity';

@Table({
  tableName: 'mp_causa_no_entrega_tipo_procedimiento',
  timestamps: true,
  paranoid: true,
})
export class CausaNoEntregaTipoTecnologia extends Model<CausaNoEntregaTipoTecnologia> {

  @ApiModelProperty()
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number;

  @ApiModelProperty()
  @Column({
    field: 'tipo_tecnologia',
    allowNull: false,
    type: DataType.STRING(1),
    unique: 'tipo_tengologia_causa_no_entrega_id_i',
  })
  tipoTecnologia: string;

  @ApiModelProperty()
  @Column({
    field: 'causa_no_entrega_id',
    allowNull: false,
    unique: 'tipo_tengologia_causa_no_entrega_id_i',
  })
  @ForeignKey(() => CausaNoEntrega)
  causaNoEntregaId: number;

  @ApiModelProperty()
  @Column({
    field: 'habilitado',
    type: DataType.BOOLEAN,
  })
  habilitado: boolean;

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

  @BelongsTo(() => CausaNoEntrega)
  causaNoEntrega: CausaNoEntrega;
}

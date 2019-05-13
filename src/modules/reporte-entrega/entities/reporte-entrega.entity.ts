import { Model, Table, Column, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Entrega } from '../../../modules/entrega/entities/entrega.entity';
import { ApiModelProperty } from '@nestjs/swagger';

@Table({
  tableName: 'mp_reporte_entrega',
  timestamps: true,
  paranoid: true,
})
export class ReporteEntrega extends Model<ReporteEntrega> {

  @ApiModelProperty()
  @Column({
    primaryKey: true,
    type: DataType.BIGINT,
    field: 'id',
  })
  id: number;

  @ApiModelProperty()
  @Column({
    type: DataType.BIGINT,
    allowNull: false,
    field: 'id_reporte_entrega',
  })
  IdReporteEntrega: number;

  @ApiModelProperty()
  @Column({
    allowNull: false,
    field: 'estado_entrega',
  })
  EstadoEntrega: number;

  @ApiModelProperty()
  @Column({
    allowNull: true,
    field: 'causa_no_entrega',
  })
  CausaNoEntrega: number;

  @ApiModelProperty()
  @Column({
    type: DataType['DOUBLE PRECISION'],
    allowNull: false,
    field: 'valor_entregado',
  })
  ValorEntregado: number;

  @ApiModelProperty()
  @ForeignKey(() => Entrega)
  @Column({
    type: DataType.BIGINT,
    allowNull: false,
    field: 'entrega_id',
  })
  EntregaId: number;

  @BelongsTo(() => Entrega)
  entrega: Entrega;
}

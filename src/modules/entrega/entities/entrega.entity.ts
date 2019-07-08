import { Table, Model, Column, DataType, ForeignKey, BelongsTo, AllowNull, HasOne, CreatedAt, UpdatedAt, DeletedAt } from 'sequelize-typescript';
import { ApiModelProperty } from '@nestjs/swagger';
import { PrescripcionDetalle } from '../../../modules/prescripcion-detalle/entities/prescripcion-detalle.entity';
import { ReporteEntrega } from '../../../modules/reporte-entrega/entities/reporte-entrega.entity';

@Table({
  timestamps: true,
  paranoid: true,
  tableName: 'mp_entrega_tecnologia',
})
export class Entrega extends Model<Entrega> {

  @ApiModelProperty()
  @HasOne( () => ReporteEntrega, {
    as: 'reporteEntrega',
    foreignKey: 'entrega_id',
    onDelete: 'CASCADE',
    constraints: true,
  })
  @Column({
    primaryKey: true,
    type: DataType.BIGINT,
  })
  id: number;

  @ApiModelProperty()
  @AllowNull(false)
  @Column({
    field: 'id_entrega',
  })
  IDEntrega: number;

  @ApiModelProperty()
  @AllowNull(false)
  @Column({
    field: 'no_prescripcion',
    type: DataType.STRING('20'),
  })
  NoPrescripcion: string;

  @ApiModelProperty()
  @AllowNull(false)
  @Column({
    field: 'tipo_tec',
    type: DataType.STRING('1'),
  })
  TipoTec: string;

  @ApiModelProperty()
  @AllowNull(false)
  @Column({
    field: 'con_tec',
  })
  ConTec: number;

  @ApiModelProperty()
  @AllowNull(false)
  @Column({
    field: 'tipo_id_paciente',
    type: DataType.STRING('5'),
  })
  TipoIDPaciente: string;

  @ApiModelProperty()
  @AllowNull(false)
  @Column({
    field: 'no_id_paciente',
    type: DataType.STRING('20'),
  })
  NoIDPaciente: string;

  @ApiModelProperty()
  @Column({ field: 'no_entrega' })
  NoEntrega: number;

  @ApiModelProperty()
  @AllowNull(false)
  @Column({
    field: 'cod_ser_tec_entregado',
    type: DataType.STRING('50'),
  })
  CodSerTecEntregado: string;

  @ApiModelProperty()
  @AllowNull(false)
  @Column({
    field: 'cant_tot_entregada',
    type: DataType.STRING(10),
  })
  CantTotEntregada: string;

  @ApiModelProperty()
  @AllowNull(false)
  @Column({
    field: 'ent_total',
  })
  EntTotal: number;

  @ApiModelProperty()
  @Column({
    field: 'causa_no_entrega',
  })
  CausaNoEntrega: number;

  @ApiModelProperty()
  @AllowNull(false)
  @Column({
    field: 'fecha_entrega',
    type: DataType.DATEONLY,
  })
  FecEntrega: string;

  @ApiModelProperty()
  @Column({
    allowNull: true,
    field: 'no_lote',
    type: DataType.STRING(50),
  })
  NoLote: string;

  @ApiModelProperty()
  @ForeignKey(() => PrescripcionDetalle)
  @Column({
    field: 'prescripcion_detalle_id',
    type: DataType.BIGINT,
  })
  prescripcionDetalleId: number;

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

  @BelongsTo(() => PrescripcionDetalle)
  prescripcionDetalle: PrescripcionDetalle;
}

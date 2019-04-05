import { Table, Model, Column, PrimaryKey, CreatedAt, UpdatedAt, DeletedAt } from 'sequelize-typescript';
import { ApiModelProperty } from '@nestjs/swagger';

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
}

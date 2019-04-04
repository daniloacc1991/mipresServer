import { Table, Model, Column, PrimaryKey } from 'sequelize-typescript';
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
  Id: number;

  @ApiModelProperty()
  @Column({
    field: 'descripcion',
    allowNull: false,
  })
  Descripcion: string;

  @ApiModelProperty()
  @Column({
    field: 'aplica_para',
    allowNull: false,
  })
  AplicaPara: number;
}

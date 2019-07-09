import { Table, Column, Model, AutoIncrement, Unique, PrimaryKey, AllowNull, DataType } from 'sequelize-typescript';
import { CreatedAt, UpdatedAt, DeletedAt } from 'sequelize-typescript';
import { ApiModelProperty } from '@nestjs/swagger';

@Table({
  timestamps: true,
  paranoid: true,
  tableName: 'mp_users',
})
export class User extends Model<User> {

  @AutoIncrement
  @PrimaryKey
  @AllowNull(false)
  @Column
  id: number;

  @AllowNull(false)
  @Column
  @ApiModelProperty()
  name: string;

  @Unique
  @AllowNull(false)
  @Column
  @ApiModelProperty()
  usuario: string;

  @Unique
  @AllowNull(false)
  @Column
  @ApiModelProperty()
  email: string;

  @AllowNull(false)
  @Column
  @ApiModelProperty()
  password: string;

  @AllowNull(false)
  @Column
  @ApiModelProperty()
  rol: string;

  @Column({
    field: 'ind_notifica_junta',
    defaultValue: 'N',
    allowNull: false,
    type: DataType.STRING(1),
  })
  indNotifyJunta: string;

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

import { Table, Column, Model, AutoIncrement, Unique, PrimaryKey, AllowNull } from 'sequelize-typescript';
import { ApiModelProperty } from '@nestjs/swagger';

@Table({
  timestamps: true,
  paranoid: true,
  tableName: 'users',
})
export class User extends Model<User> {

  @AutoIncrement
  @PrimaryKey
  @AllowNull(false)
  @Column
  @ApiModelProperty()
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
}

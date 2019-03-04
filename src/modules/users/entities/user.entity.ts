import { Table, Column, Model, AutoIncrement, Unique, PrimaryKey } from 'sequelize-typescript';

@Table({
  timestamps: true,
  paranoid: true,
  tableName: 'users',
})
export class User extends Model<User> {

  @AutoIncrement
  @PrimaryKey
  @Column
  id: number;

  @Column
  name: string;

  @Unique
  @Column
  usuario: string;

  @Unique
  @Column
  email: string;

  @Column
  password: string;

  @Column
  rol: string;
}

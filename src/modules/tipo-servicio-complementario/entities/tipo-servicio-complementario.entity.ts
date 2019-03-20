import { Table, Model, PrimaryKey, HasOne, Column, DataType, AutoIncrement, Unique, AllowNull, Default } from 'sequelize-typescript';
import { ApiModelProperty } from '@nestjs/swagger';
import { PrescripcionDetalle } from 'src/modules/prescripcion-detalle/entities/prescripcion-detalle.entity';

@Table({
  timestamps: true,
  paranoid: true,
  tableName: 'mp_tipo_servicio_complementario',
})
export class TipoServicioComplementario extends Model<TipoServicioComplementario> {

  @ApiModelProperty()
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number;

  @Unique
  @HasOne(() => PrescripcionDetalle, {
    as: 'codigoSerCom',
    foreignKey: 'CodSerComp',
    onDelete: 'CASCADE',
    constraints: true,
  })
  @Column(DataType.STRING('5'))
  codigo: string;

  @ApiModelProperty()
  @Column(DataType.STRING('50'))
  descripcion: string;

  @ApiModelProperty()
  @AllowNull(false)
  @Default(true)
  @Column(DataType.BOOLEAN)
  habilitado: boolean;

  @ApiModelProperty()
  @AllowNull(false)
  @Column(DataType.STRING(20))
  version: string;

  @ApiModelProperty()
  @AllowNull(false)
  @Column(DataType.DATE)
  fecha: string;

}

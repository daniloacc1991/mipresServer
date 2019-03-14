import { Table, Model, PrimaryKey, Column, DataType, HasOne, AllowNull } from 'sequelize-typescript';
import { PrescripcionDetalle } from '../../../modules/prescripcion-detalle/entities/prescripcion-detalle.entity';
import { ApiModelProperty } from '@nestjs/swagger';

@Table({
  timestamps: true,
  paranoid: true,
  tableName: 'mp_unidad_medida_dosis',
})
export class UnidadMedidaDosis extends Model<UnidadMedidaDosis> {

  @PrimaryKey
  @HasOne( () => PrescripcionDetalle, {
    as: 'unidad_medida_dosis_id',
    foreignKey: 'DosisUM',
    onDelete: 'CASCADE',
    constraints: true,
  })
  @AllowNull(false)
  @Column(DataType.STRING('10'))
  @ApiModelProperty()
  id: string;

  @AllowNull(false)
  @Column(DataType.STRING('50'))
  @ApiModelProperty()
  unidadMedidcaPrincipioActivo: string;

  @AllowNull(false)
  @Column
  @ApiModelProperty()
  descripcion: string;

  @AllowNull(false)
  @Column
  @ApiModelProperty()
  habititado: number;

  @AllowNull(false)
  @Column(DataType.DATE)
  @ApiModelProperty()
  fecha: string;
}

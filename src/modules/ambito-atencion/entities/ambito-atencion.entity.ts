import { Table, Model, PrimaryKey, Column, DataType, HasOne } from 'sequelize-typescript';
import { ApiModelProperty } from '@nestjs/swagger';
import { PrescripcionEncabezado } from 'src/modules/prescripcion-encabezado/entities/prescripcion-encabezado.entity';

@Table({
  timestamps: true,
  paranoid: true,
  tableName: 'mp_ambito_atencion',
})
export class AmbitoAtencion extends Model<AmbitoAtencion> {

  @HasOne( () => PrescripcionEncabezado, {
    as: 'ambito_atencion_id',
    foreignKey: 'CodAmbAte',
    onDelete: 'CASCADE',
    constraints: true,
  })
  @PrimaryKey
  @Column
  @ApiModelProperty()
  id: number;

  @Column(DataType.STRING('50'))
  @ApiModelProperty()
  descripcion: string;
}

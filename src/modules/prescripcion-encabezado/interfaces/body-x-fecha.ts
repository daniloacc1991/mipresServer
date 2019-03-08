import { IsNotEmpty } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class BodyxFecha {

  @ApiModelProperty()
  @IsNotEmpty()
  nit: string;

  @ApiModelProperty()
  @IsNotEmpty()
  token: string;

  @ApiModelProperty()
  @IsNotEmpty()
  fecha: string;
}

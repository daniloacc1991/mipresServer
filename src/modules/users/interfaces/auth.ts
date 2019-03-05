import { ApiModelProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class Auth {

  @ApiModelProperty()
  @IsNotEmpty()
  usuario: string;

  @ApiModelProperty()
  @IsNotEmpty()
  password: string;

}

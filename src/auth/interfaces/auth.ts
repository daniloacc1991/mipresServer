import { ApiModelProperty } from '@nestjs/swagger';

export class Auth {

  @ApiModelProperty()
  usuario: string;

  @ApiModelProperty()
  password: string;

}

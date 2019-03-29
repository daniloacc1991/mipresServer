import { ApiModelProperty } from '@nestjs/swagger';

export class ChangePasswordInterface {

  @ApiModelProperty()
  password: string;
}

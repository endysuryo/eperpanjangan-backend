import { ApiModelProperty } from '@nestjs/swagger';

export class UserDto {
  @ApiModelProperty()
  first_name: string;

  @ApiModelProperty()
  last_name: string;

  @ApiModelProperty()
  email: string;

  @ApiModelProperty()
  password: string;

  @ApiModelProperty()
  role: string;
}

export class LoginDto {
  @ApiModelProperty()
  email: string;

  @ApiModelProperty()
  password: string;
}

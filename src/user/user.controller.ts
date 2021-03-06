import { Controller, Get, Post, Delete, Body, Param, Patch } from '@nestjs/common';
import { UserDto, LoginDto } from './dto/user.dto';
import { UserService } from './user.service';
import { User } from './interfaces/user.interface';
import { ApiUseTags, ApiBearerAuth, ApiModelProperty, ApiOperation } from '@nestjs/swagger';

@ApiUseTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly service: UserService) {}

  @ApiOperation({ title: 'Do Login Action' })
  @Post('/login')
  async login(@Body() dto: LoginDto): Promise<User> {
    return this.service.login(dto);
  }

  @ApiOperation({ title: 'Fetch All Data' })
  @Get()
  async findAll(): Promise<User[]> {
    return this.service.findAll();
  }

  @ApiOperation({ title: 'Find Data By Kode Pengajuan' })
  @Get('/:kode_pengajuan')
  async findId(@Param('kode_pengajuan') kode_pengajuan: string): Promise<User> {
    return this.service.findId(kode_pengajuan);
  }

  @ApiOperation({ title: 'Save Data' })
  @Post()
  async create(@Body() dto: UserDto) {
    await this.service.create(dto);
  }

  @ApiOperation({ title: 'Update Data' })
  @Patch('/:id')
  async patch(@Param('id') id: string, @Body() dto: UserDto) {
    await this.service.patch(id, dto);
  }

  @ApiOperation({ title: 'Delete Data' })
  @Delete('/:id')
  async delete(@Param('id') id: string) {
    await this.service.delete(id);
  }
}

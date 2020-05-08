import { Controller, Get, Post, Delete, Body, Param, Patch } from '@nestjs/common';
import { PerpanjanganDto } from './dto/perpanjangan.dto';
import { PerpanjanganService } from './perpanjangan.service';
import { Perpanjangan } from './interfaces/perpanjangan.interface';
import { ApiUseTags, ApiBearerAuth, ApiModelProperty, ApiOperation } from '@nestjs/swagger';

@ApiUseTags('Perpanjangan')
@Controller('perpanjangan')
export class PerpanjanganController {
  constructor(private readonly service: PerpanjanganService) {}

  @ApiOperation({ title: 'Fetch All Data' })
  @Get()
  async findAll(): Promise<Perpanjangan[]> {
    return this.service.findAll();
  }

  @ApiOperation({ title: 'Find Data By ID' })
  @Get('/:id')
  async findId(@Param('id') id: string): Promise<Perpanjangan> {
    return this.service.findId(id);
  }

  @ApiOperation({ title: 'Save Data' })
  @Post()
  async create(@Body() dto: PerpanjanganDto) {
    await this.service.create(dto);
  }

  @ApiOperation({ title: 'Update Data' })
  @Patch('/:id')
  async patch(@Param('id') id: string, @Body() dto: PerpanjanganDto) {
    await this.service.patch(id, dto);
  }

  @ApiOperation({ title: 'Delete Data' })
  @Delete('/:id')
  async delete(@Param('id') id: string) {
    await this.service.delete(id);
  }
}

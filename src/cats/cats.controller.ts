import { Controller, Get, Post, Delete, Body, Param, Patch } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
import { ApiUseTags, ApiBearerAuth, ApiModelProperty, ApiOperation } from '@nestjs/swagger';

@ApiUseTags('Cats')
@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @ApiOperation({ title: 'Fetch All Data' })
  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @ApiOperation({ title: 'Find Data By ID' })
  @Get('/:id')
  async findId(@Param('id') id: string): Promise<Cat> {
    return this.catsService.findId(id);
  }

  @ApiOperation({ title: 'Save Data' })
  @Post()
  async create(@Body() dto: CreateCatDto) {
    await this.catsService.create(dto);
  }

  @ApiOperation({ title: 'Update Data' })
  @Patch('/:id')
  async patch(@Param('id') id: string, @Body() dto: CreateCatDto) {
    await this.catsService.patch(id, dto);
  }

  @ApiOperation({ title: 'Delete Data' })
  @Delete('/:id')
  async delete(@Param('id') id: string) {
    await this.catsService.delete(id);
  }
}

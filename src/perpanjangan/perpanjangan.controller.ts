import { Controller, Get, Post, Delete, Body, Param, Patch, UseInterceptors, UploadedFile, Res, UploadedFiles } from '@nestjs/common';
import { PerpanjanganDto } from './dto/perpanjangan.dto';
import { PerpanjanganService } from './perpanjangan.service';
import { Perpanjangan } from './interfaces/perpanjangan.interface';
import { ApiUseTags, ApiBearerAuth, ApiModelProperty, ApiOperation } from '@nestjs/swagger';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { imageFileFilter, editFileName } from 'utils/file-uploading.utils';
import { diskStorage } from 'multer';

@ApiUseTags('Perpanjangan')
@Controller('perpanjangan')
export class PerpanjanganController {
  constructor(private readonly service: PerpanjanganService) {}

  @ApiOperation({ title: 'Fetch All Data' })
  @Get()
  async findAll(): Promise<Perpanjangan[]> {
    return this.service.findAll();
  }

  @ApiOperation({ title: 'Find Data By Kode Pengajuan' })
  @Get('/:kode_pengajuan')
  async findId(@Param('kode_pengajuan') kode_pengajuan: string): Promise<Perpanjangan> {
    return this.service.findId(kode_pengajuan);
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

  @ApiOperation({ title: 'Upload Image' })
  @Post('/upload')
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './files',
        filename: editFileName,
      }),
      fileFilter: imageFileFilter,
    }),
    )
  async uploadedFile(@UploadedFile() file: any) {
    const response = {
      originalname: file.originalname,
      filename: file.filename,
    };
    return response;
  }

  @ApiOperation({ title: 'Upload Multiple Image' })
  @Post('/upload/multiple')
  @UseInterceptors(
    FilesInterceptor('image', 20, {
      storage: diskStorage({
        destination: './files',
        filename: editFileName,
      }),
      fileFilter: imageFileFilter,
    }),
  )
  async uploadMultipleFiles(@UploadedFiles() files: any) {
    const response = [];
    files.forEach((file: { originalname: any; filename: any; }) => {
      const fileReponse = {
        originalname: file.originalname,
        filename: file.filename,
      };
      response.push(fileReponse);
    });
    return response;
  }

  @ApiOperation({ title: 'Show Image' })
  @Get('/image/:imgpath')
  seeUploadedFile(@Param('imgpath') image: any, @Res() res: any) {
    return res.sendFile(image, { root: './files' });
  }
}

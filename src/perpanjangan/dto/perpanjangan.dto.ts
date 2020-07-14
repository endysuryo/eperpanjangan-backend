import { ApiModelProperty } from '@nestjs/swagger';

export class PerpanjanganDto {
  @ApiModelProperty()
  kode_perpanjangan: string;

  @ApiModelProperty()
  jenis_angkutan: string;

  @ApiModelProperty()
  nama_po: string;

  @ApiModelProperty()
  tnkb: string;

  @ApiModelProperty()
  kp_lama: string;

  @ApiModelProperty()
  kartu_kir: string;

  @ApiModelProperty()
  jasa_raharja: string;

  @ApiModelProperty()
  stnk: string;

  @ApiModelProperty()
  surat_rekomendasi: string;

  @ApiModelProperty()
  sk_trayek: string;

  @ApiModelProperty()
  biaya: string;

  @ApiModelProperty()
  denda: string;

  @ApiModelProperty()
  status: string;

  @ApiModelProperty()
  keterangan: string;

  @ApiModelProperty()
  created_at: string;
}

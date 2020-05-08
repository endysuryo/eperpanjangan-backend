import { ApiModelProperty } from '@nestjs/swagger';

export class PerpanjanganDto {
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
  approve_at: string;

  @ApiModelProperty()
  admin_id: string;

  @ApiModelProperty()
  user_id: string;

  @ApiModelProperty()
  created_at: string;
}
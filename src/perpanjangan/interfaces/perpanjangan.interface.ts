import { Document } from 'mongoose';

export interface Perpanjangan extends Document {
  readonly kode_perpanjangan: string;
  readonly jenis_angkutan: string;
  readonly nama_po: string;
  readonly tnkb: string;
  readonly kp_lama: string;
  readonly jasa_raharja: string;
  readonly stnk: string;
  readonly surat_rekomendasi: string;
  readonly sk_trayek: string;
  readonly biaya: string;
  readonly denda: string;
  readonly status: string;
  readonly keterangan: string;
  readonly approve_at: string;
  readonly admin_id: string;
  readonly user_id: string;
  readonly created_at: string;
}

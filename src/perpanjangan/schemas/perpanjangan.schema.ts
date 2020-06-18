import * as mongoose from 'mongoose';

export const PerpanjanganSchema = new mongoose.Schema({
  jenis_angkutan: String,
  nama_po: String,
  tnkb: String,
  kp_lama: String,
  jasa_raharja: String,
  stnk: String,
  surat_rekomendasi: String,
  sk_trayek: String,
  biaya: String,
  denda: String,
  status: String,
  approve_at: String,
  admin_id: String,
  user_id: String,
  created_at: String,
});

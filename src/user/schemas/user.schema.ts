import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  kode_perpanjangan: String,
  first_name: String,
  last_name: String,
  phone: String,
  email: String,
  password: String,
  role: String,
});

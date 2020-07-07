import { Document } from 'mongoose';

export interface User extends Document {
  readonly kode_perpanjangan: string;
  readonly first_name: string;
  readonly last_name: string;
  readonly phone: string;
  readonly email: string;
  readonly password: string;
  readonly role: string;
}

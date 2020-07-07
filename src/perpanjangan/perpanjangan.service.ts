import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Perpanjangan } from './interfaces/perpanjangan.interface';
import { PerpanjanganDto } from './dto/perpanjangan.dto';

@Injectable()
export class PerpanjanganService {
  constructor(@InjectModel('Perpanjangan') private readonly perpanjanganModel: Model<Perpanjangan>) {}

async findAll(): Promise<Perpanjangan[]> {
    return this.perpanjanganModel.find().exec();
  }

  async findId(dto: string): Promise<Perpanjangan> {
    return this.perpanjanganModel.findOne({ kode_perpanjangan: dto }).exec();
  }

  async create(dto: PerpanjanganDto): Promise<Perpanjangan> {
    const createdPerpanjangan = new this.perpanjanganModel(dto);
    return createdPerpanjangan.save();
  }

  async patch(id: string, dto: PerpanjanganDto): Promise<any> {
    return this.perpanjanganModel.findByIdAndUpdate(id, dto).exec();
  }

  async delete(id: any): Promise<any> {
    return this.perpanjanganModel.findOneAndDelete(id).exec();
  }
}

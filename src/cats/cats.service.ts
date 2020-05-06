import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cat } from './interfaces/cat.interface';
import { CreateCatDto } from './dto/create-cat.dto';

@Injectable()
export class CatsService {
  constructor(@InjectModel('Cat') private readonly catModel: Model<Cat>) {}

  async findAll(): Promise<Cat[]> {
    return this.catModel.find().exec();
  }

  async findId(id: string): Promise<Cat> {
    return this.catModel.findById(id).exec();
  }

  async create(createCatDto: CreateCatDto): Promise<Cat> {
    const createdCat = new this.catModel(createCatDto);
    return createdCat.save();
  }

  async patch(id: string, dto: CreateCatDto): Promise<any> {
    return this.catModel.findByIdAndUpdate(id, dto).exec();
  }

  async delete(id: any): Promise<any> {
    return this.catModel.findOneAndDelete(id).exec();
  }
}

import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './interfaces/user.interface';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async login(dto): Promise<any> {
    const login = await this.userModel.findOne(dto).exec();
    if (login) {
      return login;
    } else {
      return false;
    }
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async findId(dto: string): Promise<User> {
    return this.userModel.findOne({ kode_perpanjangan: dto }).exec();
  }

  async create(dto: UserDto): Promise<User> {
    const createdUser = new this.userModel(dto);
    return createdUser.save();
  }

  async patch(id: string, dto: UserDto): Promise<any> {
    return this.userModel.findByIdAndUpdate(id, dto).exec();
  }

  async delete(id: any): Promise<any> {
    return this.userModel.findOneAndDelete(id).exec();
  }
}

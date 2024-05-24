import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UsersService {

  constructor(@InjectModel(User.name) private userModel: Model<User>) {
  }

  async create(createUserDto: any): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async findOne(id: string): Promise<User> {
    const user = this.userModel.findById(id).exec();
    if (!user) {
       throw new NotFoundException('User not found');
    }
    return user;
  }

  async delete(id: string): Promise<User> {
    const user = this.userModel.findByIdAndDelete(id).exec();
    if (!user) {
       throw new NotFoundException('User not found');
    }
    return user;
  }

}

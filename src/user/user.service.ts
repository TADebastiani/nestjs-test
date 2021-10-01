import { Injectable } from '@nestjs/common';
import { User } from './user.schema';
import { Model } from 'mongoose';
import { CreateUserInput } from './dto/create-user.input';
import { genSaltSync, hashSync } from 'bcrypt';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UserService {

  constructor(@InjectModel(User.name) private userModel: Model<User>) {
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find({}, { password: 0 }).lean();
  }

  async findOne(id: string): Promise<User> {
    return this.userModel.findById(id, { password: 0 }).orFail();
  }

  async findByLogin(login: string): Promise<User> {
    return this.userModel.findOne({ login }).orFail();
  }

  async create(input: CreateUserInput): Promise<User> {
    const user = new this.userModel({
      ...input,
      password: hashSync(input.password.toString(), genSaltSync())
    });
    return user.save();
  }

  async delete(id: string): Promise<User> {
    return this.userModel.findByIdAndRemove(id).orFail();
  }
}

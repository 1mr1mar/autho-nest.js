import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(email: string, hashedPassword: string): Promise<User> {
    try {
      console.log('Creating new user with email:', email);
      const newUser = new this.userModel({ email, password: hashedPassword });
      const savedUser = await newUser.save();
      console.log('User saved successfully:', savedUser._id);
      return savedUser;
    } catch (error) {
      console.error('Error creating user:', error);
      throw new InternalServerErrorException('Failed to create user: ' + error.message);
    }
  }

  async findByEmail(email: string): Promise<User | null> {
    try {
      console.log('Finding user by email:', email);
      const user = await this.userModel.findOne({ email });
      console.log('User found:', user ? user._id : 'null');
      return user;
    } catch (error) {
      console.error('Error finding user:', error);
      throw new InternalServerErrorException('Failed to find user: ' + error.message);
    }
  }
}


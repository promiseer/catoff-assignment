import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto'; // Assuming you have a CreateUserDto defined in dto/create-user.dto.ts
import { UpdateUserDto } from './dto/update-user.dto'; //
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) { }

  getAllUsers(): Promise<User[]> {
    return this.usersRepository.find({});
  }

  async getUserById(id: string): Promise<User> {
    const user = await this.usersRepository.findOne(id);
    if (!user) {
      // throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  // Create a new user
  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const newUser = this.usersRepository.create(createUserDto);
    await this.usersRepository.save(newUser);
    return newUser;
  }

  // Update an existing user
  async updateUser(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.getUserById(id);
    const updatedUser = Object.assign(user, updateUserDto);
    return this.usersRepository.save(updatedUser);
  }

  // Delete a user by ID
  async deleteUser(id: string): Promise<void> {
    const user = await this.getUserById(id);
    await this.usersRepository.remove(user);
  }
}

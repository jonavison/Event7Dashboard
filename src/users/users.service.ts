import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { EntityManager, Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
    private readonly entityManager: EntityManager,
  ) {}
  async createUser(createUserDto: CreateUserDto) {
    // Create a new user entity
    const user = new User({
      ...createUserDto,
    });
    await this.entityManager.save(user);
  }
  async findAll() {
    return this.usersRepository.find();
  }

  async findOne(id: number) {
    return this.usersRepository.findOne({
      where: { id },
    });
  }

  async remove(id: number) {
    await this.usersRepository.delete(id);
  }
}

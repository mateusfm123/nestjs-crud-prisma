// users.service.ts
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from './prisma.service';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    return await this.prisma.create(createUserDto);
  }
  async findAll() {
    return await this.prisma.findAll();
  }

  async findOne(id: string) {
    return await this.prisma.findOne(id);
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return await this.prisma.update(id, updateUserDto);
  }

  async remove(id: string) {
    return await this.prisma.remove(id);
  }
}

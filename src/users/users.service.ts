// users.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    return await this.prisma.create(createUserDto);
  }
  async findAll() {
    return await this.prisma.findAll();
  }
}

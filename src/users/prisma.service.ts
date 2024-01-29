/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class PrismaService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async create(createUserDto: CreateUserDto) {
    return await this.prisma.usuarios.create({
      data: createUserDto,
    });
  }

  async findAll() {
    return await this.prisma.usuarios.findMany();
  }
}

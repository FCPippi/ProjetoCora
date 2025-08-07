import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { UserResponseDto } from "./dto/user-response.dto";

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<UserResponseDto[]> {
    const users = await this.prisma.user.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return users;
  }

  async findOne(id: number): Promise<UserResponseDto> {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    return user;
  }

  async create(createUserDto: CreateUserDto): Promise<UserResponseDto> {
    const user = await this.prisma.user.create({
      data: createUserDto,
    });
    return user;
  }

  async update(
    id: number,
    updateUserDto: UpdateUserDto
  ): Promise<UserResponseDto> {
    await this.findOne(id);

    const updatedUser = await this.prisma.user.update({
      where: { id },
      data: updateUserDto,
    });

    return updatedUser;
  }

  async remove(id: number): Promise<void> {
    await this.findOne(id);

    await this.prisma.user.delete({
      where: { id },
    });
  }
}

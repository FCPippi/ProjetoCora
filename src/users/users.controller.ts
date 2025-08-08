import {
  Controller,
  Get,
  Param,
  Body,
  Put,
  Delete,
  ParseIntPipe,
  HttpStatus,
  HttpCode,
  UseGuards,
} from "@nestjs/common";
import { UsersService } from "./users.service";
import { UpdateUserDto } from "./dto/update-user.dto";
import { UserResponseDto } from "./dto/user-response.dto";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { GetUserId } from "../auth/get-user.decorator";

@Controller("users")
@UseGuards(JwtAuthGuard)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getUsers(): Promise<UserResponseDto[]> {
    return this.usersService.findAll();
  }

  @Get(":id")
  async getUserById(
    @Param("id", ParseIntPipe) id: number
  ): Promise<UserResponseDto> {
    return this.usersService.findOne(id);
  }

  @Put("profile")
  async updateProfile(
    @GetUserId() userId: number,
    @Body() updateUserDto: UpdateUserDto
  ): Promise<UserResponseDto> {
    return this.usersService.update(userId, updateUserDto);
  }

  @Delete("profile")
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteProfile(@GetUserId() userId: number): Promise<void> {
    return this.usersService.remove(userId);
  }
}

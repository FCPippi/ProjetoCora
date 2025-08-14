import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator';

const MIN_PASSWORD_LENGTH = 6;

export class UpdateUserDto {
  @IsEmail()
  @IsOptional()
  email?: string;

  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  @MinLength(MIN_PASSWORD_LENGTH)
  password?: string;
}

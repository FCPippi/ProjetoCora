import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MinLength,
  IsOptional,
} from 'class-validator';

const MIN_PASSWORD_LENGTH = 6;

export class RegisterDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(MIN_PASSWORD_LENGTH, {
    message: `A senha deve ter pelo menos ${MIN_PASSWORD_LENGTH} caracteres`,
  })
  password: string;

  @IsString()
  @IsOptional()
  name?: string;
}

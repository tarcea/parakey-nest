import { IsDateString, IsNotEmpty, IsString } from 'class-validator';

export class KeyDto {
  @IsString()
  @IsNotEmpty()
  accessId: string;

  @IsString()
  @IsNotEmpty()
  email: string;
}
export class TimeKeyDto {
  @IsString()
  @IsNotEmpty()
  accessId: string;

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsDateString()
  @IsNotEmpty()
  startDate: Date;

  @IsDateString()
  @IsNotEmpty()
  expirationDate: Date;
}

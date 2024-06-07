import { IsDate, IsNumber, IsOptional, IsString } from "class-validator";

export class UpdateCarDto {

  @IsString()
  @IsOptional()
  id: string;  
  @IsString()
  @IsOptional()
  make: string;
  @IsString()
  @IsOptional()
  model: string;
  @IsString()
  @IsOptional()
  year: number;
  @IsNumber()
  @IsOptional()
  price: number;
}
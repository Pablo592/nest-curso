import { IsDate, IsNumber, IsString } from "class-validator";

export class CreateCarDto {

  @IsString()
  id: string;  
  @IsString()
  make: string;
  @IsString()
  model: string;
  @IsString()
  year: number;
  @IsNumber()
  price: number;
}
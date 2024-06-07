import { IsDate, IsNumber, IsString } from "class-validator";

export class CreateCarDto {

  id: string;  
  @IsString()
  @IsDate()
  make: string;
  @IsString()
  model: string;
  @IsString()
  year: number;
  @IsNumber()
  price: number;
}
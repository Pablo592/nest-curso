import { IsDate, IsNumber, IsString } from "class-validator";

export class CreateCarDto {

  @IsString()
  @IsDate()
  make: string;
  @IsString()
  model: string;
  @IsString()
  year: number;
  @IsString()
  vin: string;
  @IsNumber()
  price: number;
}
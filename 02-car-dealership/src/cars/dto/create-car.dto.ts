import { IsNumber, IsString } from "class-validator";

export class CreateCarDto {

  @IsString()
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
import { IsIn, IsNumber, IsOptional, IsPositive, IsString, MinLength } from "class-validator"

export class CreateProductDto {

    @IsString()
    @MinLength(1)
    title: string
    
    @IsNumber()
    @IsPositive()
    @IsOptional()
    price?: number
    
    description?:string
    
    slug?:string
    
    stock?:number
    
    sizes: string[]

    @IsIn(['men','women','kid','unisex'])
    gender:string
}

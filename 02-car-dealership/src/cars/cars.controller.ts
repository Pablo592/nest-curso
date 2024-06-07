import { Body, Controller, Delete, Get, NotFoundException, Param, ParseUUIDPipe, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Controller('cars')
export class CarsController {

    constructor(
        private carsService: CarsService
    ) {}

    @Get()
    getAllCars() {
        return this.carsService.findAll();
    }

    @Get(':id')
    getCarById( @Param('id', ParseUUIDPipe) id: string) {

        const car = this.carsService.findOneById(id);

        if( !car) 
            throw new NotFoundException(`Car with id ${id} not found`);
        
        return car
    }

    @Post()
    createCar( @Body() createCarDto: CreateCarDto ){
        return this.carsService.createCar(createCarDto);
    }

    @Put(':id')
    updateCar( @Param('id') id:string, @Body() updateCarDto: UpdateCarDto){
        return this.carsService.updateCar(id, updateCarDto);
    }

    @Delete(':id')
    deleteCar( @Param('id') id:string){
        return this.carsService.deleteCar(id);
    }
}

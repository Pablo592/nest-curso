import { Controller, Get, NotFoundException, Param, ParseIntPipe } from '@nestjs/common';
import { CarsService } from './cars.service';

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
    getCarById( @Param('id', ParseIntPipe) id) {

        const car = this.carsService.findOneById(parseInt(id));

        if( !car) 
            throw new NotFoundException(`Car with id ${id} not found`);
        
        return car
    }
}

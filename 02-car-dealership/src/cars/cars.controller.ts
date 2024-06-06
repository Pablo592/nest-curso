import { Body, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
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

    @Post()
    createCar( @Body() body){
        return this.carsService.createCar(body);
    }

    @Put(':id')
    updateCar( @Param('id', ParseIntPipe) id, @Body() body){
        return this.carsService.updateCar(parseInt(id), body);
    }

    @Delete(':id')
    deleteCar( @Param('id', ParseIntPipe) id){
        return this.carsService.deleteCar(parseInt(id));
    }
}

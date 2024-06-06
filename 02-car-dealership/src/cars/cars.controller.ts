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
    getCarById( @Param('id') id: string) {

        const car = this.carsService.findOneById(id);

        if( !car) 
            throw new NotFoundException(`Car with id ${id} not found`);
        
        return car
    }

    @Post()
    createCar( @Body() body){
        return this.carsService.createCar(body);
    }

    @Put(':id')
    updateCar( @Param('id') id:string, @Body() body){
        return this.carsService.updateCar(id, body);
    }

    @Delete(':id')
    deleteCar( @Param('id') id:string){
        return this.carsService.deleteCar(id);
    }
}

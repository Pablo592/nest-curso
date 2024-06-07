import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

import { Car } from './interfaces/car.interface';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Injectable()
export class CarsService {

    private cars : CreateCarDto[] = [
        {
            id: uuid(),
            make: 'Toyota',
            model: 'Corolla',
            year: 2019,
            price: 15000
        },
        {
            id: uuid(),
            make: 'Honda',
            model: 'Civic',
            year: 2018,
            price: 20000
        },
        {
            id: uuid(),
            make: 'Ford',
            model: 'Fusion',
            year: 2017,
            price: 25000
        },
        {
            id: uuid(),
            make: 'Nissan',
            model: 'Sentra',
            year: 2016,
            price: 30000
        },
        {
            id: uuid(),
            make: 'Chevrolet',
            model: 'Malibu',
            year: 2015,
            price: 35000
        }
    ];

    findAll() {
        return this.cars;
    }

    findOneById(id: string) {
        return this.cars.find(car => car.id === id);
    }

    createCar( createCarDto:CreateCarDto) {

        const car:CreateCarDto = {
            id: uuid(),
            ...createCarDto
        };

        this.cars.push(car);
        return createCarDto;
    }

    updateCar(id: string, updateCar:UpdateCarDto) {
        const index = this.cars.findIndex(car => car.id === id);
        this.cars[index] = updateCar;
        return updateCar;
    }

    deleteCar(id: string) {
        const index = this.cars.findIndex(car => car.id === id);
        this.cars.splice(index, 1);
        return this.cars;
    }
}

import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

import { Car } from './interfaces/car.interface';

@Injectable()
export class CarsService {

    private cars : Car[] = [
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

    createCar(car) {
        this.cars.push(car);
        return car;
    }

    updateCar(id: string, car) {
        const index = this.cars.findIndex(car => car.id === id);
        this.cars[index] = car;
        return car;
    }

    deleteCar(id: string) {
        const index = this.cars.findIndex(car => car.id === id);
        this.cars.splice(index, 1);
        return this.cars;
    }
}

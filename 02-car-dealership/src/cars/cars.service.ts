import { Injectable } from '@nestjs/common';

@Injectable()
export class CarsService {

    private cars = [
        {
            id: 1,
            make: 'Toyota',
            model: 'Corolla',
            year: 2019,
            price: 15000
        },
        {
            id: 2,
            make: 'Honda',
            model: 'Civic',
            year: 2018,
            price: 20000
        },
        {
            id: 3,
            make: 'Ford',
            model: 'Fusion',
            year: 2017,
            price: 25000
        },
        {
            id: 4,
            make: 'Nissan',
            model: 'Sentra',
            year: 2016,
            price: 30000
        },
        {
            id: 5,
            make: 'Chevrolet',
            model: 'Malibu',
            year: 2015,
            price: 35000
        }
    ];

    findAll() {
        return this.cars;
    }

    findOneById(id: number) {
        return this.cars.find(car => car.id === id);
    }

    createCar(car) {
        this.cars.push(car);
        return car;
    }

    updateCar(id: number, car) {
        const index = this.cars.findIndex(car => car.id === id);
        this.cars[index] = car;
        return car;
    }

    deleteCar(id: number) {
        const index = this.cars.findIndex(car => car.id === id);
        this.cars.splice(index, 1);
        return this.cars;
    }
}

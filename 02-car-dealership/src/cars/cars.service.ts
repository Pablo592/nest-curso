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
}
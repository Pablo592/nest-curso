import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {

    @PrimaryGeneratedColumn('increment')
    id:number

    @Column('text', {
        unique: true,
    })
    title: string
}

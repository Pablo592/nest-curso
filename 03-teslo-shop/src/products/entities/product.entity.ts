import { type } from "os";
import { text } from "stream/consumers";
import { BeforeInsert, BeforeUpdate, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {

    @PrimaryGeneratedColumn('increment')
    id:number

    @Column('text', {
        unique: true,
    })
    title: string

    @Column('numeric', {
        default: 0
    })
    price: number;

    @Column({
        type: 'text',
        nullable: true
    })
    description: string

    @Column({
        type: 'text',
        unique: true,
        nullable: true
    })
    slug: string


    @Column({
        type: 'int',
        default: 0
    })
    stock: number


    @Column({
        type: 'text',
        array: true
    })
    sizes: string[]

    @Column({
        type: 'text'
    })
    gender: string


    @BeforeInsert()
    antesDeGuardar(){}


    @BeforeUpdate()
    antesDeActualizar(){}
}

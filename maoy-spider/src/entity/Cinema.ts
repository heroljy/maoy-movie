import {Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Cinema {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "varchar"})
    name: string;
    
    @Column({type: "varchar"})
    address: string;

    @Column({type: "double"})
    lat: number;

    @Column({type: "double"})
    lng: number;

    
    @Column({type: "varchar"})
    price: string;
    
    @Column({type: "varchar"})
    labels: string;
}
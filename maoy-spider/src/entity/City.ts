import {Entity, Column, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class City {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type:'varchar'})
    cityId: string;

    @Column({type:'varchar'})
    pinyin: string;
    
    @Column({type:'varchar'})
    name: string;

    @Column({type:'varchar'})
    rank: string;
    
    @Column({type:'varchar'})
    acronym: string;
    
    @Column({type:'varchar'})
    chineseFullName: string;

    @Column({type:'double'})
    lat: number;

    @Column({type:'double'})
    lng: number;
    
    @Column({type:'varchar'})
    hot: string;
}
import {Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Actor{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type:'varchar'})
    filmId: string;
    
    @Column({type:'varchar'})
    realName: string;
    
    @Column({type:'varchar'})
    roleName: string;

    @Column({type:'varchar'})
    avatar: string;
}
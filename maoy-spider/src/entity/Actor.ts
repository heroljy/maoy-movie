import {Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Actor{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type:'int'})
    filmId: number;
    
    @Column({type:'varchar'})
    realName: string;
    
    @Column({type:'varchar'})
    roleName: string;

    @Column({type:'varchar'})
    avatar: string;
}
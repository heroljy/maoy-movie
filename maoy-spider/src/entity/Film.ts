import {Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Film{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type:'varchar'})
    name: string; // 名字
    
    @Column({type:'varchar'})
    img: string; // 名字
    
    @Column({type:'varchar'})
    ename: string; // 外文名字

    @Column({type:'varchar'})
    score: string; // 评分

    @Column({type:'varchar'})
    status: string; // 0--正在热映，1--点映，2--未上映
    
    @Column({type:'varchar'})
    peopleNum: string; // 参与评论的人数

    @Column({type:'varchar'})
    wannerNum: string; // 想看的人数
    
    @Column({type:'varchar'})
    type: string; // 电影类型

    @Column({type:'varchar'})
    country: string; // 国家

    @Column({type:'varchar'})
    duration: string; // 时长

    @Column({type:'varchar'})
    releaseTime: string; // 大陆上映时间

    @Column({type:'varchar'})
    desc: string; // 电影描述
    

}
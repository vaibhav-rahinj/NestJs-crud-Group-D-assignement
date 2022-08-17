import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class UserPostEntity{

    @PrimaryGeneratedColumn()
    User_Id:number;

    @Column()
    User_Name?:string;

    @Column()
    Email?:string;

    @Column()
    Roles?: string;

    @Column()
    Gender?: string;

    @Column()
    Mobile_no?:number;

    @Column()
    State?:string;

    @Column()
    Country?:string;
    
}
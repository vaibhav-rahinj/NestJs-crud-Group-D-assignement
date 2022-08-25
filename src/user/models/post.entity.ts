import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class UserPostEntity{

    @PrimaryGeneratedColumn()
    User_Id:number;

    @Column()
    User_Name:string;

    @Column({unique: true})
    Email:string;

    @Column()
    Roles: string;

    @Column()
    Gender: string;

    // @Column()
    // Mobile_no:BigInteger;
    
    // @Column()
    // Address:string;

    @Column()
    State:string;

    @Column()
    Country:string;
    // @Column({nullable: true})
    // User_img:string;
    
}
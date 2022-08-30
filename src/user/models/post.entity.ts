import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { ExamEntity } from "../exammodels/exam.entity";
import { Exam } from "../exammodels/exam.interface";


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
    // Exam_Center: string;

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

    // @OneToMany((type) => ExamEntity, (exam) => exam.Center_Name)
    // Center: ExamEntity[]

    @ManyToMany((type) => ExamEntity, (exam) => exam.Center_Name)
    Center: ExamEntity[]

}


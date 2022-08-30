import { Column, Entity,  JoinTable,  ManyToMany,   ManyToOne,   PrimaryGeneratedColumn } from "typeorm";
import { UserPostEntity } from "../models/post.entity";
import { User } from "../models/post.interface";


@Entity('exams')
export class ExamEntity{

    @PrimaryGeneratedColumn()
    Center_Id:number;

    @Column()
    Exam_Center:string;

//     @ManyToOne((type) => UserPostEntity, (user) => user.Center)
//    Center_Name: UserPostEntity

   @ManyToMany((type) => UserPostEntity, (user) => user.Center)
   @JoinTable({name: "User_exam_Table"})
   Center_Name: UserPostEntity
}


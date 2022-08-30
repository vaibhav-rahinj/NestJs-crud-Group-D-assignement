import { Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('User_exam_Table')
export class UserdataEntity{

    @PrimaryGeneratedColumn()
    Id:number;

    // Center_Id: number;
    // User_Id: number;

}


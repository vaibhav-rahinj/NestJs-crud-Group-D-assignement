// import {
//   Column,
//   Entity,
//   JoinColumn,
//   ManyToOne,
//   PrimaryGeneratedColumn,
// } from 'typeorm';
// import { validate, IsString } from 'class-validator';
// import { student } from './entity/student.entity';

// @Entity('stud_subj_table')
// export class Stud_Subj_Table {
//   @PrimaryGeneratedColumn()
//   sub_id: number;

//   @Column()
//   @IsString()
//   Sub_name: string;

//   @ManyToOne(() => student, (student) => student.id)
//   @JoinColumn()
//   student: Promise<student>;
// }

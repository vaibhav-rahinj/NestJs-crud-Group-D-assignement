import { IsString } from 'class-validator';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { student } from '../../student/entity/student.entity';

@Entity('subject')
export class Subject {
  @PrimaryGeneratedColumn()
  sub_id: number;

  @Column()
  Sub_name: string;

  // @ManyToMany(() => student, (students) => students.subjects)
  // students: Promise<student[]>;

  @ManyToMany((type) => student, (students) => students.subjects)
  @JoinTable({
    name:''
  })
  students:Promise<student[]>;
}

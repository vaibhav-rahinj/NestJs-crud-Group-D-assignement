import { IsString } from 'class-validator';
import {
  Column,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Subject } from './subject.entity';
@Entity()
export class student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: '' })
  fname: string;

  @Column()
  lname: string;

  @Column()
  Stud_email: string;

  @Column()
  Stud_gender: string;

  @Column()
  Stud_address: string;

  // @ManyToMany(() => Subject, subjects => subjects.students)
  // subjects: Promise<Subject[]>;

  @ManyToMany((type) => Subject, (subjects) => subjects.students)
  subjects: Promise<Subject[]>;
}

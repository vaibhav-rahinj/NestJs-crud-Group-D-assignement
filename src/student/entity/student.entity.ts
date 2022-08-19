import { validate, IsString } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('student1')
export class student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: '' })
  @IsString()
  fname: string;

  @Column()
  lname: string;

  @Column()
  Stud_email: string;

  @Column()
  Stud_gender: string;

  // @Column()
  // Stud_image:string;

  @Column()
  Stud_address: string;
}

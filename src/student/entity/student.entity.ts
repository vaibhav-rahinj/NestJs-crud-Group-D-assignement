import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('student1')
export class student {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ default: '' })
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

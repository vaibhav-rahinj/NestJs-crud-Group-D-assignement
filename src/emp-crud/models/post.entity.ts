import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity('emp')
export class EmpCrudEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  empFname: string;
  @Column()
  empLname: string;
  @Column()
  emp_email: string;
  @Column()
  emp_gender: string;
  @Column()
  emp_address: string;
  @Column()
  img: string;
}

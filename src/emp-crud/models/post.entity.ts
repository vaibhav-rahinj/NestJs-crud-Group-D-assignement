import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Department } from './dep.entity';
@Entity('emp')
export class EmpCrudEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  empFname: string;
  @Column()
  empLname: string;
  @Column()
  email: string;
  // @Column()
  // emp_gender: string;
  @Column()
  emp_address: string;
  // @Column()
  // img: string;
  @ManyToMany(() => Department, (department) => department.Employee)
  department: Department[];
}

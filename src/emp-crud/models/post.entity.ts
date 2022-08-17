// import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// @Entity('emp_crud')
// export class EmpCrudEntity {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @Column({default:''})
//   body:string;

//   @Column({type:'timestamp', default:()=>'CURRENT_TIMESTAMP'})
//   createdAt:Date;

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity('employee')
export class EmpCrudEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;
  @Column({ default: '' })
  empFname: string;
  @Column()
  empLname: string;
  @Column()
  emp_email: string;
  @Column()
  emp_gender: string;
  @Column()
  emp_address: string;
}

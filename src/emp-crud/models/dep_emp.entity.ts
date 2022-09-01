import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class EmpDep {
  @PrimaryGeneratedColumn()
  emp_dep_id: number;
  @Column()
  departmentId: number;
  @Column()
  empCrudEntityId: number;
}

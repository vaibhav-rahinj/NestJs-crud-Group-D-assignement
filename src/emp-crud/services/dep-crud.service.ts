import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { Department } from '../models/dep.entity';
import { DepCrud } from '../models/depinterface';
import { EmpCrudEntity } from '../models/post.entity';
import { EmpCrudService } from './emp-crud.service';

@Injectable()
export class DepartmentService {
  constructor(
    @InjectRepository(Department)
    private readonly departmentRepo: Repository<Department>, // private departmentService: EmpCrudService,
  ) {}
  createDeparment(department: Department): Observable<Department> {
    return from(this.departmentRepo.save(department));
  }
  findAllDepartment(): Observable<DepCrud[]> {
    return from(this.departmentRepo.find());
  }
}

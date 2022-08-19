import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { EmpCrudEntity } from '../models/post.entity';
import { EmpCrud } from '../models/postinterface';

@Injectable()
export class EmpCrudService {
  constructor(
    @InjectRepository(EmpCrudEntity)
    private readonly EmployeePostRepository: Repository<EmpCrudEntity>,
  ) {}
  getemployeeById(id: number): Observable<EmpCrud> {
    return from(this.EmployeePostRepository.findOneBy({ id }));
  }
  createPost(employeePost: EmpCrud): Observable<EmpCrud> {
    return from(this.EmployeePostRepository.save(employeePost));
  }
  findAllPosts(): Observable<EmpCrud[]> {
    return from(this.EmployeePostRepository.find());
  }
  updatePutPost(id: number, employeePost: EmpCrud): Observable<UpdateResult> {
    return from(this.EmployeePostRepository.update(id, employeePost));
  }
  updatePatchPost(id: number, employeePost: EmpCrud): Observable<UpdateResult> {
    return from(this.EmployeePostRepository.update(id, employeePost));
  }
  deletePost(id: number): Observable<DeleteResult> {
    return from(this.EmployeePostRepository.delete(id));
  }
}

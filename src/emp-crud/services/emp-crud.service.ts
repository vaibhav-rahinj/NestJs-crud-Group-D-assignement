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
    // const student_id = id;
    return from(this.EmployeePostRepository.findOneBy({ id }));
  }
  createPost(studentPost: EmpCrud): Observable<EmpCrud> {
    return from(this.EmployeePostRepository.save(studentPost));
  }
  findAllPosts(): Observable<EmpCrud[]> {
    return from(this.EmployeePostRepository.find());
  }
  updatePutPost(id: number, studentPost: EmpCrud): Observable<UpdateResult> {
    return from(this.EmployeePostRepository.update(id, studentPost));
  }
  updatePatchPost(id: number, studentPost: EmpCrud): Observable<UpdateResult> {
    return from(this.EmployeePostRepository.update(id, studentPost));
  }
  deletePost(id: number): Observable<DeleteResult> {
    return from(this.EmployeePostRepository.delete(id));
  }
}

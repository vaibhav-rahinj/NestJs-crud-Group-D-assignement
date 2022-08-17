import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { student } from '../entity/student.entity';
import { StudentInterface } from '../dto/dto.interface';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(student)
    private readonly studentPostRepository: Repository<student>,
  ) {}

  createPost(studentPost: StudentInterface): Observable<StudentInterface> {
    return from(this.studentPostRepository.save(studentPost));
  }

  findAllPosts(): Observable<StudentInterface[]> {
    return from(this.studentPostRepository.find());
  }

  updatePutPost(
    id: number,
    studentPost: StudentInterface,
  ): Observable<UpdateResult> {
    return from(this.studentPostRepository.update(id, studentPost));
  }

  updatePatchPost(
    id: number,
    studentPost: StudentInterface,
  ): Observable<UpdateResult> {
    return from(this.studentPostRepository.update(id, studentPost));
  }

  deletePost(id: number): Observable<DeleteResult> {
    return from(this.studentPostRepository.delete(id));
  }
  getstudentById(id: number): Observable<StudentInterface> {
    // const student_id = id;
    return from(this.studentPostRepository.findOneBy({ id }));
  }
}

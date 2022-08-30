import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { student } from '../entity/student.entity';
import { Subject } from '../entity/subject.entity';
import { StudentService } from '../services/student.service';

@Injectable()
export class SubjectService {
  constructor(
    @InjectRepository(Subject)
    private readonly subjectrepository: Repository<Subject>,
    private studentServices: StudentService,
  ) {}
  create(student: student, subjects: Subject[]): Promise<Subject[]> {
    // subjects.id = student_m;
    // subjects.name = student_m;
    // subjects.info = student_m
    return this.subjectrepository.save(subjects);
  }
  findAll(): Promise<Subject[]> {
    return this.subjectrepository.find();
  }
}

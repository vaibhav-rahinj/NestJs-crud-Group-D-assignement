import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StudentInterface } from '../dto/dto.interface';
import { UpdateStudentDto } from '../dto/update-student.dto';
import { student } from '../entity/student.entity';

@Injectable()
export class StudentService {
  //inject student repository...
  constructor(
    @InjectRepository(student)
    private readonly studentRepository: Repository<student>,
  ) {}
  create(studentInterface: StudentInterface): Promise<student> {
    // let stud: student_m = new student_m();
    // //student.id = CreateStudentDto.id
    // stud.FirstName = CreateStudentDto.FirstName;
    // stud.LastName = CreateStudentDto.LastName;
    // stud.Gender = CreateStudentDto.Gender;
    // stud.Student_Email = CreateStudentDto.Student_Email;
    // stud.Student_Add = CreateStudentDto.Student_Add;
    // return this.studentRepository.save(stud);
    return this.studentRepository.save(studentInterface);
  }

  findAll(): Promise<student[]> {
    return this.studentRepository.find();
  }

  findOne(id: number) {
    return this.studentRepository.findOneBy({ id });
  }

  update(id: number, updateStudentDto: UpdateStudentDto) {
    // let stud: student_m = new student_m();
    // stud.FirstName = updateStudentDto.FirstName;
    // stud.LastName = updateStudentDto.LastName;
    // stud.Gender = updateStudentDto.Gender;
    // stud.Student_Email = updateStudentDto.Student_Email;
    // stud.Student_Add = updateStudentDto.Student_Add;
    // stud.id = id;
    // return this.studentRepository.save(stud);
    return this.studentRepository.update(id, updateStudentDto);
  }
  updateAll(id: number, updateStudentDto: UpdateStudentDto) {
    return this.update(id, updateStudentDto);
  }

  remove(id: number) {
    return this.studentRepository.delete(id);
  }
}

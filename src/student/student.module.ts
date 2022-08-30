import { Module } from '@nestjs/common';
import { student } from './entity/student.entity';
import { StudentController } from './controller/student.controller';
import { StudentService } from './services/student.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Subject } from './entity/subject.entity';
import { SubjectsController } from './subject/subject.controller';
import { SubjectService } from './subject/subject.service';

@Module({
  imports: [TypeOrmModule.forFeature([student, Subject])],
  controllers: [StudentController, SubjectsController],
  providers: [StudentService, SubjectService],
})
export class StudentModule {}

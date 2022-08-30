import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentModule } from 'src/student/student.module';
import { SubjectsController } from './subject.controller';
import { subjectRespoitory } from './subject.repository';
import { SubjectService } from './subject.service';

@Module({
  imports: [TypeOrmModule.forFeature([subjectRespoitory]), StudentModule],
  controllers: [SubjectsController],
  providers: [SubjectService],
})
export class SubjectModule {}

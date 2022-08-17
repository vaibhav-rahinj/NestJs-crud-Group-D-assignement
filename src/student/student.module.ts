import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { student } from './entity/student.entity';
import { StudentController } from './controller/student.controller';
import { StudentService } from './services/student.service';

@Module({
  imports: [TypeOrmModule.forFeature([student])],
  controllers: [StudentController],
  providers: [StudentService],
})
export class StudentModule {}

import { Body, Controller, Get, Post, Request } from '@nestjs/common';
import { Subject } from '../entity/subject.entity';
import { SubjectService } from './subject.service';

@Controller('subjects')
export class SubjectsController {
  constructor(private subjectsService: SubjectService) {}
  @Post()
  create(@Body() subjects: Subject[], @Request() req: any): Promise<Subject[]> {
    const stud = req.student;
    return this.subjectsService.create(stud, subjects);
  }

  @Get()
  findAll() {
    return this.subjectsService.findAll();
  }
}

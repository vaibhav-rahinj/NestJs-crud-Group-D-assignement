import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';
import { StudentInterface } from '../dto/dto.interface';
import { StudentService } from '../services/student.service';

@Controller('student')
export class StudentController {
  constructor(private studentService: StudentService) {}
  @Post('stdCreate') create(
    @Body() studentPost: StudentInterface,
  ): Observable<StudentInterface> {
    return this.studentService.createPost(studentPost);
  }

  @Get('stddata') findAll(): Observable<StudentInterface[]> {
    return this.studentService.findAllPosts();
  }

  @Put(':id') update(
    @Param('id') id: number,
    @Body() studentInterface: StudentInterface,
  ): Observable<UpdateResult> {
    return this.studentService.updatePutPost(id, studentInterface);
  }

  @Patch(':id') updatePatch(
    @Param('id') id: number,
    @Body() studentPost: StudentInterface,
  ): Observable<UpdateResult> {
    return this.studentService.updatePatchPost(id, studentPost);
  }

  @Delete(':id') delete(@Param('id') id: number): Observable<DeleteResult> {
    return this.studentService.deletePost(id);
  }
  @Get(':id')
  getStudentById(@Param('id') id: number): Observable<StudentInterface> {
    return this.studentService.getstudentById(id);
  }
}

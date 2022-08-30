// import {
//   Controller,
//   Post,
//   Get,
//   Param,
//   Body,
//   Put,
//   Patch,
//   Delete,
//   UseInterceptors,
//   UploadedFile,
//   Res,
// } from '@nestjs/common';
// import { FileInterceptor } from '@nestjs/platform-express';
// import { diskStorage } from 'multer';
// import { extname } from 'path';
// import { Observable, of } from 'rxjs';
// import { DeleteResult, UpdateResult } from 'typeorm';
// import { StudentInterface } from '../dto/dto.interface';
// import { StudentService } from '../services/student.service';

// @Controller('student')
// export class StudentController {
//   imagepath: string;
//   constructor(private studentService: StudentService) {}
//   @Post('stdCreate') create(
//     @Body() studentPost: StudentInterface
//   ): Observable<StudentInterface> {
//     return this.studentService.createPost(studentPost);
//   }

//   @Get('stddata') findAll(): Observable<StudentInterface[]> {
//     return this.studentService.findAllPosts();
//   }

//   @Put(':id') update(
//     @Param('id') id: number,
//     @Body() studentInterface: StudentInterface,
//   ): Observable<UpdateResult> {
//     return this.studentService.updatePutPost(id, studentInterface);
//   }

//   @Patch(':id') updatePatch(
//     @Param('id') id: number,
//     @Body() studentPost: StudentInterface,
//   ): Observable<UpdateResult> {
//     return this.studentService.updatePatchPost(id, studentPost);
//   }

//   @Delete(':id') delete(@Param('id') id: number): Observable<DeleteResult> {
//     return this.studentService.deletePost(id);
//   }
//   @Get(':id')
//   getStudentById(@Param('id') id: number): Observable<StudentInterface> {
//     return this.studentService.getstudentById(id);
//   }

//   @Post('image')
//   @UseInterceptors(
//     FileInterceptor('image', {
//       storage: diskStorage({
//         destination: './images',
//         filename: (req, image, callback) => {
//           const uniqueSuffix =
//             Date.now() + '-' + Math.round(Math.random() * 1e9);
//           const ext = extname(image.originalname);
//           const filename = `${uniqueSuffix}${ext}`;
//           callback(null, filename);
//         },
//       }),
//     }),
//   )
//   handleupload(@UploadedFile() image: Express.Multer.File) {
//     this.imagepath = image.path;
//     console.log('image', image);
//     console.log('path', image.path);
//     return 'file upload API';
//   }
//   @Get('/image/:image')
//   seeUploadedFile(@Param('image') image, @Res() res) {
//     return res.sendFile(image, { root: './images' });
//   }
// }
// import {
//   Post,
//   Get,
//   Param,
//   Body,
//   Patch,
//   Delete,
//   Put,
//   UseInterceptors,
//   UploadedFile,
//   Res,
// } from '@nestjs/common';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express/multer';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { StudentInterface } from '../dto/dto.interface';
import { UpdateStudentDto } from '../dto/update-student.dto';
import { StudentService } from '../services/student.service';
// import { remove } from '@vue/shared';
// import { create } from 'domain';
// import { get } from 'http';
@Controller('student')
export class StudentController {
  imagepath: string;
  constructor(private readonly StudentManagmentService: StudentService) {}
  @Post('stdCreate')
  create(@Body() CreateStudentDto: StudentInterface) {
    // CreateStudentDto.Image = this.imagepath;
    return this.StudentManagmentService.create(CreateStudentDto);
  }
  @Get('stddata')
  findAll() {
    return this.StudentManagmentService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.StudentManagmentService.findOne(id);
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() UpdatStudentDto: UpdateStudentDto) {
    //CreateStudentDto.Image = this.imagepath;
    return this.StudentManagmentService.update(+id, UpdatStudentDto);
  }
  @Put(':id')
  updateAll(
    @Param('id') id: string,
    @Body() updatStudentDto: UpdateStudentDto,
  ) {
    // CreateStudentDto.Image = this.imagepath;
    return this.StudentManagmentService.update(+id, updatStudentDto);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.StudentManagmentService.remove(+id);
  }
  @Post('/images')
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './images',
        filename: (req, image, callback) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          const ext = extname(image.originalname);
          // const filename = `${image.originalname}-${uniqueSuffix}${ext}`;
          const filename = `${uniqueSuffix}${ext}`;
          callback(null, filename);
        },
      }),
    }),
  )
  handleupload(@UploadedFile() image: Express.Multer.File) {
    this.imagepath = image.path;
    console.log('image', image);
    console.log('path', image.path);
    return 'file upload Successfully...';
  }
  @Get('show/:image')
  seeUploadedFile(@Param('image') image, @Res() res) {
    return res.sendFile(image, { root: './images' });
  }
}

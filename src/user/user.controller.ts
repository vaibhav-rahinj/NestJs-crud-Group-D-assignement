import { Body, Controller, Delete, Get, Param, Patch, Post, Put, UploadedFile, UseInterceptors } from '@nestjs/common';
import { User } from './models/post.interface';
import { UserService } from './user.service';
import { Observable } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';
import { ValidateUser } from './models/user.validation';
import { FileInterceptor } from '@nestjs/platform-express';
// import { FileInterceptor } from '@nestjs/platform-express';


@Controller('user')
export class UserController {
    constructor(private userService: UserService){}
    @Post()
    create(@Body() users:ValidateUser): Observable<User>{
        return this.userService.createUser(users)
    }
    
    @Get()
    findAllUser(): Observable<User[]> {
        return this.userService.findAllUsers();
    }
    
    @Get(':id')
    getSpecificUser(@Param('id') id:number): Observable<User>{
        return this.userService.getSpecificUser(id);
    }

    @Put(':id')
    updatePut(@Param('id') id:number, @Body() users:ValidateUser ):Observable<UpdateResult>{
        return this.userService.updateUser(id, users)
    }

    @Patch(':id') 
    updatePatch(
        @Param('id') id: number,
        @Body() users:ValidateUser): Observable<UpdateResult> {
        return this.userService.updatePatchUser(id, users);
      }
   
      @Delete(':id') 
      delete(@Param('id') id: number): Observable<DeleteResult> {
        return this.userService.deleteUser(id);
      }

      @Post('post-add')
      @UseInterceptors(FileInterceptor('User_img',{dest:"./uplode"}))
      postAdd(@UploadedFile() profile:Express.Multer.File):Object{
        // console.log(profile)
        return{
            message: "file uploading"
        }
      }
}

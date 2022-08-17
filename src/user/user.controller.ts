import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { User } from './models/post.interface';
import { UserService } from './user.service';
import { Observable } from 'rxjs';
import { UpdateResult } from 'typeorm';

@Controller('user')
export class UserController {
    constructor(private userService: UserService){}
    @Post()
    create(@Body() users:User): Observable<User>{
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
    update(@Param('id') id:number, @Body() users:User ):Observable<UpdateResult>{
        return this.userService.updateUser(id, users)
    }

   
}

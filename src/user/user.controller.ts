import { Body, Controller, Get, Post } from '@nestjs/common';
import { User } from './models/post.interface';
import { UserService } from './user.service';
import { Observable } from 'rxjs';

@Controller('user')
export class UserController {
    constructor(private userService: UserService){}
    @Post()
    create(@Body() users:User): Observable<User>{
        return this.userService.createPost(users)
    }
    
    @Get()
    findAllUser(): Observable<User[]> {
        return this.userService.findAllUsers();
    }
}

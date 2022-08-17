import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { UserPostEntity } from './models/post.entity';
import { User } from './models/post.interface';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserPostEntity)
        private readonly userPostRepository:Repository<UserPostEntity>
    ){}

    createPost(users: User): Observable<User>{
        return from(this.userPostRepository.save(users));
    }

    findAllUsers(): Observable<User[]>{
        return from(this.userPostRepository.find());
    }
}

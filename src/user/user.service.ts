import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { UserPostEntity } from './models/post.entity';
import { User } from './models/post.interface';
import { ValidateUser } from './models/user.validation';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserPostEntity)
        private readonly userPostRepository:Repository<UserPostEntity>
    ){}

    createUser(users: ValidateUser): Observable<User>{
        return from(this.userPostRepository.save(users));
    }

    findAllUsers(): Observable<User[]>{
        return from(this.userPostRepository.find());
    }

    getSpecificUser(id:number): Observable<User>{
        const User_Id = id;
        return from(this.userPostRepository.findOneBy({User_Id}));
    }

    updateUser(id:number, users:ValidateUser): Observable<UpdateResult>{
        return from(this.userPostRepository.update(id, users));
    }
   
    updatePatchUser(id: number,users:ValidateUser): Observable<UpdateResult> {
        return from(this.userPostRepository.update(id, users));
      }

    deleteUser(id: number): Observable<DeleteResult> {
        return from(this.userPostRepository.delete(id));
      }
}

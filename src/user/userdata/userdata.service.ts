import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { UserdataEntity } from './userdata.entity';
import { Userdata } from './userdata.interface';
import { ValidateUserdata } from './userdata.validation';


@Injectable()
export class UserdataService {
    constructor(
        @InjectRepository(UserdataEntity)
        private readonly userdataRepository:Repository<UserdataEntity>
    ){}

    createUser(userdata: ValidateUserdata): Observable<Userdata>{
        let user = {
            
        };
        return from(this.userdataRepository.save(userdata));
    }

    findAllUserdatas(): Observable<Userdata[]>{
        return from(this.userdataRepository.find());
    }
}

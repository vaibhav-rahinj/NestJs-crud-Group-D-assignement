// import { EntityRepository, Repository } from "typeorm";
// import { Subject } from "../entity/subject.entity";

// @EntityRepository(Subject)
// export class subjectRespoitory extends Repository<Subject>{}
import { EntityRepository, Repository } from 'typeorm';
import { Subject } from '../entity/subject.entity';
@EntityRepository(Subject)
export class subjectRespoitory extends Repository<Subject> {}

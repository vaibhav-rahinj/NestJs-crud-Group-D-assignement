import { Module } from '@nestjs/common';
import { EmpCrudService } from './services/emp-crud.service';

import { EmpCrudEntity } from './models/post.entity';

import { EmpCrudController } from './controller/emp-crud.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([EmpCrudEntity])],
  providers: [EmpCrudService],
  controllers: [EmpCrudController],
})
export class EmpCrudModule {}

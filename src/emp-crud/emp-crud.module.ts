import { Module } from '@nestjs/common';
import { EmpCrudService } from './services/emp-crud.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmpCrudEntity } from './models/post.entity';
import { EmpCrudController } from './controller/emp-crud.controller';

@Module({
  imports: [TypeOrmModule.forFeature([EmpCrudEntity])],
  providers: [EmpCrudService],
  controllers: [EmpCrudController],
})
export class EmpCrudModule {}

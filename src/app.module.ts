
import { BookModule } from './book/book.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { AppService } from './app.service';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { EmpCrudModule } from './emp-crud/emp-crud.module';
import { StudentModule } from './student/student.module';
import { MulterModule } from '@nestjs/platform-express';
import { CategoryModule } from './book/category/category.module';
import { BookCatModule } from './book/category/category_book/bookcat.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    // ConfigModule.forRoot({isGlobal:true}),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(<string>process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      autoLoadEntities: true,
      entities: [EmpCrudEntity, Department],
      synchronize: false,
    }),

    BookModule,
    BookCatModule,
    CategoryModule,
    UserModule,
    StudentModule,
    EmpCrudModule,
    DepartmentModule,
    ProductModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';
// import { BookEntity } from './models/book.entity';
import { BookEntity } from './models/book.entity'
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[
    TypeOrmModule.forFeature([BookEntity])
  ],
  providers: [BookService],
  controllers: [BookController]
})
export class BookModule {}



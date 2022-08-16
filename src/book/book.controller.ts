import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { Observable } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';
import { BookService } from './book.service';
import { Book } from './models/book.interface';

@Controller('book')
export class BookController {
    constructor(private bookService: BookService) {}
    @Post()
    add(@Body() book: Book ): Observable<Book> {
        return this.bookService.addBook(book);
    }

    @Get()
    findAllBook(): Observable<Book[]> {
        return this.bookService.findAllBooks();
    }

    @Get(':id')
    // getSpecificStudent(@Param('id') id:number): Book {
    getSpecificStudent(@Param('id') id:number): Observable<Book> {
      return this.bookService.getSpecificBook(id);
    }

    @Put(':id')
    updatePut(
        @Param('id') id:number,
        @Body() book: Book 
    ): Observable<UpdateResult> {
        return this.bookService.updatePutBook(id,book)
    }

    @Patch(':id')
    updatePatch(
        @Param('id') id:number,
        @Body() book: Book, 
    ): Observable<UpdateResult> {
        return this.bookService.updatePatchBook(id,book)
    }

    @Delete(':id')
    delete(@Param('id') id : number): Observable<DeleteResult>{
        return this.bookService.deleteBook(id);
    }
}

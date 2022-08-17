import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
// import { IsNotEmpty } from 'class-validator';
import { Observable } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';
import { BookService } from './book.service';
import { Book } from './models/book.interface';
import { BookModel } from './models/book.model';
import { PatchBook } from './models/book.patch';

@Controller('book')
export class BookController {
    constructor(private bookService: BookService) {}

    @Post()
    // @IsNotEmpty()
    add(@Body() bookModel: BookModel ): Observable<Book> {
        return this.bookService.addBook(bookModel);
    }

    @Get()
    findAllBook(): Observable<Book[]> {
        return this.bookService.findAllBooks();
    }

    @Get(':id')
    // getSpecificStudent(@Param('id') id:number): Book {
    getSpecificBookId(@Param('id') id:number): Observable<Book> {
      return this.bookService.getSpecificBookId(id);
    }

    @Get('bname/:name')
    getSpecificBookName(@Param('name') name:string): Observable<Book> {
      return this.bookService.getSpecificBookName(name);
    }

    @Get('author/:author')
    getSpecificBookAuthor(@Param('author') author:string): Observable<Book> {
      return this.bookService.getSpecificBookAuthor(author);
    }

    @Get('price/:price')
    getSpecificBookPrice(@Param('price') price:number): Observable<Book> {
      return this.bookService.getSpecificBookPrice(price);
    }

    @Get('isbn/:bisbn')
    getSpecificBookISBN(@Param('bisbn') bisbn:string): Observable<Book> {
      return this.bookService.getSpecificBookISBN(bisbn);
    }

    @Put(':id')
    updatePut(
        @Param('id') id:number,
        @Body() bookModel: BookModel 
    ): Observable<UpdateResult> {
        return this.bookService.updatePutBook(id,bookModel);
    }

    // @Patch(':id')
    // updatePatch(
    //     @Param('id') id:number,
    //     @Body() bookModel: BookModel, 
    // ): Observable<UpdateResult> {
    //     return this.bookService.updatePatchBook(id,bookModel)
    // }

    @Patch(':id')
    updatePatch(
        @Param('id') id:number,
        @Body() patchBook: PatchBook, 
    ): Observable<UpdateResult> {
        return this.bookService.updatePatchBook(id,patchBook);
    }

    @Delete(':id')
    delete(@Param('id') id : number): Observable<DeleteResult>{
        return this.bookService.deleteBook(id);
    }
}

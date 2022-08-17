import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { BookEntity } from './models/book.entity';
import { Book } from './models/book.interface';
import { BookModel } from './models/book.model';
import { PatchBook } from './models/book.patch';
// import { BookModel } from './models/book.model';

@Injectable()
export class BookService {
    constructor (
        @InjectRepository(BookEntity)
        private readonly bookRepository: Repository<BookEntity>
    ) {}

    // addBook(bookModel: BookModel) {
    //     const newBook = this.bookRepository.create(bookModel);
    //     return this.bookRepository.save(newBook);
    //     // return from(this.bookRepository.save(book));
    // }

    addBook(bookModel: BookModel): Observable<Book> {
        // return from(this.bookRepository.save(bookModel));
        return from(this.bookRepository.save(bookModel));
    }

    findAllBooks(): Observable<Book[]> {
        return from(this.bookRepository.find());
    }

    
    getSpecificBookId(id:number): Observable<Book> {
        // return from(this.bookRepository.find(id));
        const book_id = id;
        return from(this.bookRepository.findOneBy({book_id}));
        // return from(this.bookRepository.find({book_id}));
    }

    getSpecificBookName(name:string): Observable<Book> {
        const book_name = name;
        return from(this.bookRepository.findOneBy({book_name}));
    }

    getSpecificBookAuthor(author:string): Observable<Book> {
        // const author ;
        return from(this.bookRepository.findOneBy({author}));
    }

    getSpecificBookISBN(bisbn:string): Observable<Book> {
        const book_isbn= bisbn;
        return from(this.bookRepository.findOneBy({book_isbn}));
    }

    getSpecificBookPrice(book_price:number): Observable<Book> {
        const price:number = book_price;
            return from(this.bookRepository.findOneBy({price}));
    }

    updatePutBook(id: number, bookModel: BookModel): Observable<UpdateResult>{
        return from(this.bookRepository.update(id,bookModel));
    }

    updatePatchBook(id: number, patchBook: PatchBook): Observable<UpdateResult>{
        return from(this.bookRepository.update(id,patchBook));
    }

    deleteBook(id: number): Observable<DeleteResult> {
        return from(this.bookRepository.delete(id));
    }
}
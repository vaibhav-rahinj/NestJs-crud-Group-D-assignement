import { Injectable, UploadedFile } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { BookCatEntity } from './category/category_book/bookcat.entity';
import { BookCat } from './category/category_book/bookcat.interface';
import { BookCatModel } from './category/category_book/bookcat.model';
import { BookEntity } from './models/book.entity';
import { Book } from './models/book.interface';
import { BookModel } from './models/book.model';
import { PatchBook } from './models/book.patch';
// import { PutBook } from './models/book.put';
// import { BookModel } from './models/book.model';

@Injectable()
export class BookService {
  // imagepath: string;
  constructor(
    @InjectRepository(BookEntity)
    private readonly bookRepository: Repository<BookEntity>,
    @InjectRepository(BookCatEntity)
    private readonly bookCatRepository: Repository<BookCatEntity>,
  ) {}

  // addBook(bookModel: BookModel) {
  //     const newBook = this.bookRepository.create(bookModel);
  //     return this.bookRepository.save(newBook);
  //     // return from(this.bookRepository.save(book));
  // }

  // addBook(bookModel: BookModel): Observable<Book> {
  //     return from(this.bookRepository.save(bookModel));
  //     // return from(this.bookRepository.save(bookModel,bookModel.book_image=this.imagepath));
  //     // return from(this.bookRepository.save(bookModel.book_image=this.imagepath));
  // }

  // trial bookEntity
  addBook(bookModel: BookModel): Observable<BookEntity> {
    return from(this.bookRepository.save(bookModel));
  }

  // third Table
  addBookCat(bookCatModel: BookCatModel): Observable<BookCatEntity> {
    return from(this.bookCatRepository.save(bookCatModel));
    // return from(this.bookRepository.save(bookCatModel));
  }

  // trail

  findAllBooks(): Observable<Book[]> {
    return from(this.bookRepository.find());
  }

  // third Table
  findAllBookCat(): Observable<BookCat[]> {
    return from(this.bookCatRepository.find());
    // return from(this.bookRepository.find());
  }

  getSpecificBookId(id: number): Observable<Book> {
    // return from(this.bookRepository.find(id));
    const book_id = id;
    return from(this.bookRepository.findOneBy({ book_id }));
    // return from(this.bookRepository.find({book_id}));
  }

  getSpecificBookName(name: string): Observable<Book> {
    const book_name = name;
    return from(this.bookRepository.findOneBy({ book_name }));
  }

  getSpecificBookAuthor(author: string): Observable<Book> {
    // const author ;
    return from(this.bookRepository.findOneBy({ author }));
  }

  getSpecificBookImage(bimg: string): Observable<Book> {
    const book_image = bimg;
    return from(this.bookRepository.findOneBy({ book_image }));
  }

  getSpecificBookISBN(bisbn: string): Observable<Book> {
    const book_isbn = bisbn;
    return from(this.bookRepository.findOneBy({ book_isbn }));
  }

  getSpecificBookPrice(book_price: number): Observable<Book> {
    const price: number = book_price;
    return from(this.bookRepository.findOneBy({ price }));
  }

  updatePutBook(id: number, bookModel: BookModel): Observable<UpdateResult> {
    return from(this.bookRepository.update(id, bookModel));
  }

  updatePatchBook(id: number, patchBook: PatchBook): Observable<UpdateResult> {
    return from(this.bookRepository.update(id, patchBook));
  }

  deleteBook(id: number): Observable<DeleteResult> {
    return from(this.bookRepository.delete(id));
  }
}

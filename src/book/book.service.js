"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.BookService = void 0;
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var rxjs_1 = require("rxjs");
var book_entity_1 = require("./models/book.entity");
// import { BookModel } from './models/book.model';
var BookService = /** @class */ (function () {
    function BookService(bookRepository) {
        this.bookRepository = bookRepository;
    }
    // addBook(bookModel: BookModel) {
    //     const newBook = this.bookRepository.create(bookModel);
    //     return this.bookRepository.save(newBook);
    //     // return from(this.bookRepository.save(book));
    // }
    // handleupload(@UploadedFile() image:Express.Multer.File){
    //     this.imagepath = image.path;
    //     console.log('image', image); 
    //     console.log('path',image.path);
    //     return "file upload API";
    //   }
    BookService.prototype.addBook = function (bookModel) {
        return (0, rxjs_1.from)(this.bookRepository.save(bookModel));
        // return from(this.bookRepository.save(bookModel,bookModel.book_image=this.imagepath));
        // return from(this.bookRepository.save(bookModel.book_image=this.imagepath));
    };
    BookService.prototype.findAllBooks = function () {
        return (0, rxjs_1.from)(this.bookRepository.find());
    };
    BookService.prototype.getSpecificBookId = function (id) {
        // return from(this.bookRepository.find(id));
        var book_id = id;
        return (0, rxjs_1.from)(this.bookRepository.findOneBy({ book_id: book_id }));
        // return from(this.bookRepository.find({book_id}));
    };
    BookService.prototype.getSpecificBookName = function (name) {
        var book_name = name;
        return (0, rxjs_1.from)(this.bookRepository.findOneBy({ book_name: book_name }));
    };
    BookService.prototype.getSpecificBookAuthor = function (author) {
        // const author ;
        return (0, rxjs_1.from)(this.bookRepository.findOneBy({ author: author }));
    };
    BookService.prototype.getSpecificBookImage = function (bimg) {
        var book_image = bimg;
        return (0, rxjs_1.from)(this.bookRepository.findOneBy({ book_image: book_image }));
    };
    BookService.prototype.getSpecificBookISBN = function (bisbn) {
        var book_isbn = bisbn;
        return (0, rxjs_1.from)(this.bookRepository.findOneBy({ book_isbn: book_isbn }));
    };
    BookService.prototype.getSpecificBookPrice = function (book_price) {
        var price = book_price;
        return (0, rxjs_1.from)(this.bookRepository.findOneBy({ price: price }));
    };
    BookService.prototype.updatePutBook = function (id, bookModel) {
        return (0, rxjs_1.from)(this.bookRepository.update(id, bookModel));
    };
    BookService.prototype.updatePatchBook = function (id, patchBook) {
        return (0, rxjs_1.from)(this.bookRepository.update(id, patchBook));
    };
    BookService.prototype.deleteBook = function (id) {
        return (0, rxjs_1.from)(this.bookRepository["delete"](id));
    };
    BookService = __decorate([
        (0, common_1.Injectable)(),
        __param(0, (0, typeorm_1.InjectRepository)(book_entity_1.BookEntity))
    ], BookService);
    return BookService;
}());
exports.BookService = BookService;

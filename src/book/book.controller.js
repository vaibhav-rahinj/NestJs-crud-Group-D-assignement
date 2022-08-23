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
exports.BookController = void 0;
var common_1 = require("@nestjs/common");
var platform_express_1 = require("@nestjs/platform-express");
var multer_1 = require("multer");
var path_1 = require("path");
// import {Images} from '../../images';
var BookController = /** @class */ (function () {
    function BookController(bookService) {
        this.bookService = bookService;
        this.imagepath = '';
    }
    // @IsNotEmpty()
    BookController.prototype.add = function (bookModel) {
        bookModel.book_image = this.imagepath;
        return this.bookService.addBook(bookModel);
        // return this.bookService.addBook(bookModel,bookModel.book_image=this.imagepath);
    };
    BookController.prototype.handleupload = function (image) {
        this.imagepath = image.path;
        console.log('image', image);
        console.log('path', image.path);
        return "file upload API";
        // return this.bookService.handleupload(image);
    };
    BookController.prototype.seeUploadedFile = function (image, res) {
        return res.sendFile(image, { root: './images' });
    };
    BookController.prototype.findAllBook = function () {
        return this.bookService.findAllBooks();
    };
    // getSpecificStudent(@Param('id') id:number): Book {
    BookController.prototype.getSpecificBookId = function (id) {
        return this.bookService.getSpecificBookId(id);
    };
    BookController.prototype.getSpecificBookName = function (name) {
        return this.bookService.getSpecificBookName(name);
    };
    BookController.prototype.getSpecificBookAuthor = function (author) {
        return this.bookService.getSpecificBookAuthor(author);
    };
    BookController.prototype.getSpecificBookPrice = function (price) {
        return this.bookService.getSpecificBookPrice(price);
    };
    BookController.prototype.getSpecificBookImage = function (bimg) {
        return this.bookService.getSpecificBookImage(bimg);
    };
    BookController.prototype.getSpecificBookISBN = function (bisbn) {
        return this.bookService.getSpecificBookISBN(bisbn);
    };
    BookController.prototype.updatePut = function (id, bookModel) {
        return this.bookService.updatePutBook(id, bookModel);
    };
    // @Patch(':id')
    // updatePatch(
    //     @Param('id') id:number,
    //     @Body() bookModel: BookModel,
    // ): Observable<UpdateResult> {
    //     return this.bookService.updatePatchBook(id,bookModel)
    // }
    BookController.prototype.updatePatch = function (id, patchBook) {
        return this.bookService.updatePatchBook(id, patchBook);
    };
    BookController.prototype["delete"] = function (id) {
        return this.bookService.deleteBook(id);
    };
    __decorate([
        (0, common_1.Post)(),
        __param(0, (0, common_1.Body)())
    ], BookController.prototype, "add");
    __decorate([
        (0, common_1.Post)('image'),
        (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image', {
            storage: (0, multer_1.diskStorage)({
                destination: './images',
                filename: function (req, image, callback) {
                    var uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
                    var ext = (0, path_1.extname)(image.originalname);
                    // const filename = `${image.originalname}-${uniqueSuffix}${ext}`;
                    var filename = "".concat(uniqueSuffix).concat(ext);
                    callback(null, filename);
                }
            })
        })),
        __param(0, (0, common_1.UploadedFile)())
    ], BookController.prototype, "handleupload");
    __decorate([
        (0, common_1.Get)('showimage/:image'),
        __param(0, (0, common_1.Param)('image')),
        __param(1, (0, common_1.Res)())
    ], BookController.prototype, "seeUploadedFile");
    __decorate([
        (0, common_1.Get)()
    ], BookController.prototype, "findAllBook");
    __decorate([
        (0, common_1.Get)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], BookController.prototype, "getSpecificBookId");
    __decorate([
        (0, common_1.Get)('bname/:name'),
        __param(0, (0, common_1.Param)('name'))
    ], BookController.prototype, "getSpecificBookName");
    __decorate([
        (0, common_1.Get)('author/:author'),
        __param(0, (0, common_1.Param)('author'))
    ], BookController.prototype, "getSpecificBookAuthor");
    __decorate([
        (0, common_1.Get)('price/:price'),
        __param(0, (0, common_1.Param)('price'))
    ], BookController.prototype, "getSpecificBookPrice");
    __decorate([
        (0, common_1.Get)('bimg/:bimg'),
        __param(0, (0, common_1.Param)('bimg'))
    ], BookController.prototype, "getSpecificBookImage");
    __decorate([
        (0, common_1.Get)('isbn/:bisbn'),
        __param(0, (0, common_1.Param)('bisbn'))
    ], BookController.prototype, "getSpecificBookISBN");
    __decorate([
        (0, common_1.Put)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)())
    ], BookController.prototype, "updatePut");
    __decorate([
        (0, common_1.Patch)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)())
    ], BookController.prototype, "updatePatch");
    __decorate([
        (0, common_1.Delete)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], BookController.prototype, "delete");
    BookController = __decorate([
        (0, common_1.Controller)('book')
    ], BookController);
    return BookController;
}());
exports.BookController = BookController;

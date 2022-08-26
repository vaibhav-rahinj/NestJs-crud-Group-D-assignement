"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.BookModel = void 0;
var class_validator_1 = require("class-validator");
var BookModel = /** @class */ (function () {
    function BookModel() {
    }
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsInt)()
    ], BookModel.prototype, "book_id");
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsString)()
    ], BookModel.prototype, "book_name");
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsString)()
    ], BookModel.prototype, "author");
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsInt)()
    ], BookModel.prototype, "price");
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsString)()
    ], BookModel.prototype, "book_isbn");
    return BookModel;
}());
exports.BookModel = BookModel;
// export class PatchBook {
//     // constructor(parameters) {
//     // }
//     // @IsNotEmpty()
//     //  @IsInt()
//      @IsDefined()
//      book_id: number;
//     // @IsNotEmpty()
//     @IsDefined()
//     //  @IsString()
//       book_name?: string;
//     // @IsNotEmpty()
//     @IsDefined()
//     //  @IsString()
//       author?: string;
//     // @IsNotEmpty()
//     //  @IsNumber()
//      @IsDefined()
//       price?: number;
//     // @IsNotEmpty()
//     @IsDefined()
//     //  @IsString() 
//      book_isbn?: string;
//     // @IsNotEmpty()
//     //  @IsString()
//      @IsDefined()
//      book_image?: string;
// }

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.BookModule = void 0;
var common_1 = require("@nestjs/common");
var book_service_1 = require("./book.service");
var book_controller_1 = require("./book.controller");
var typeorm_1 = require("@nestjs/typeorm");
// import { BookEntity } from './models/book.entity';
var book_entity_1 = require("./models/book.entity");
var BookModule = /** @class */ (function () {
    function BookModule() {
    }
    BookModule = __decorate([
        (0, common_1.Module)({
            imports: [
                typeorm_1.TypeOrmModule.forFeature([book_entity_1.BookEntity])
            ],
            providers: [book_service_1.BookService],
            controllers: [book_controller_1.BookController]
        })
    ], BookModule);
    return BookModule;
}());
exports.BookModule = BookModule;

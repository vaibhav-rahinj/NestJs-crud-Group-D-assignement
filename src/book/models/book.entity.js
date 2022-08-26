"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.BookEntity = void 0;
var typeorm_1 = require("typeorm");
// import { IsNotEmpty, IsString, IsInt} from "class-validator";
// import { Factory } from 'nestjs-seeder';
// import {IsNotEmpty} from "@nestjs/common";
var BookEntity = /** @class */ (function () {
    function BookEntity() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], BookEntity.prototype, "book_id");
    __decorate([
        (0, typeorm_1.Column)({ "default": '' })
    ], BookEntity.prototype, "book_name");
    __decorate([
        (0, typeorm_1.Column)()
    ], BookEntity.prototype, "author");
    __decorate([
        (0, typeorm_1.Column)()
    ], BookEntity.prototype, "price");
    __decorate([
        (0, typeorm_1.Column)()
    ], BookEntity.prototype, "book_image");
    __decorate([
        (0, typeorm_1.Column)()
    ], BookEntity.prototype, "book_isbn");
    BookEntity = __decorate([
        (0, typeorm_1.Entity)('book_details1')
    ], BookEntity);
    return BookEntity;
}());
exports.BookEntity = BookEntity;

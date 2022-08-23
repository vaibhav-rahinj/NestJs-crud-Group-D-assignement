"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductPostEntity = exports.ProductSize = exports.ProductData = void 0;
var typeorm_1 = require("typeorm");
var ProductData;
(function (ProductData) {
    ProductData["AVAILABLE"] = "Available";
    ProductData["OUTOFSTOCK"] = "OutOfStock";
})(ProductData = exports.ProductData || (exports.ProductData = {}));
var ProductSize;
(function (ProductSize) {
    ProductSize["SMALL"] = "S";
    ProductSize["MEDIUM"] = "M";
    ProductSize["LARGE"] = "L";
    ProductSize["EXTRALARGE"] = "XL";
})(ProductSize = exports.ProductSize || (exports.ProductSize = {}));
var ProductPostEntity = /** @class */ (function () {
    function ProductPostEntity() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)('uuid')
    ], ProductPostEntity.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({ "default": '' })
    ], ProductPostEntity.prototype, "productName");
    __decorate([
        (0, typeorm_1.Column)({ type: 'bigint', "default": null })
    ], ProductPostEntity.prototype, "price");
    __decorate([
        (0, typeorm_1.Column)({ type: 'enum', "enum": ProductData, "default": null })
    ], ProductPostEntity.prototype, "stock");
    __decorate([
        (0, typeorm_1.Column)({ type: 'enum', "enum": ProductSize, "default": null })
    ], ProductPostEntity.prototype, "size");
    __decorate([
        (0, typeorm_1.Column)({ "default": '' })
    ], ProductPostEntity.prototype, "image");
    __decorate([
        (0, typeorm_1.Column)({ type: 'timestamp', "default": function () { return 'CURRENT_TIMESTAMP'; } })
    ], ProductPostEntity.prototype, "createdAt");
    ProductPostEntity = __decorate([
        (0, typeorm_1.Entity)('product_post')
    ], ProductPostEntity);
    return ProductPostEntity;
}());
exports.ProductPostEntity = ProductPostEntity;

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
exports.ProductService = void 0;
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var rxjs_1 = require("rxjs");
var product_entity_1 = require("../models/product.entity");
var ProductService = /** @class */ (function () {
    function ProductService(ProductPostRepository) {
        this.ProductPostRepository = ProductPostRepository;
    }
    // CREATE DATA:
    ProductService.prototype.createPost = function (feedPost) {
        return (0, rxjs_1.from)(this.ProductPostRepository.save(feedPost));
    };
    // FIND ALL DATA:
    ProductService.prototype.findAllPost = function () {
        return (0, rxjs_1.from)(this.ProductPostRepository.find());
    };
    // FIND DATA BY ID:
    ProductService.prototype.findById = function (id) {
        return (0, rxjs_1.from)(this.ProductPostRepository.findOneBy({ id: id }));
    };
    // FIND DATA THROUGH EACH FIELD:
    ProductService.prototype.findByQuery = function (id) {
        return (0, rxjs_1.from)(this.ProductPostRepository.findOneBy({ id: id }));
    };
    // UPDATE THE WHOLE DATA:
    ProductService.prototype.updateData = function (id, feedPost) {
        return (0, rxjs_1.from)(this.ProductPostRepository.update(id, feedPost));
    };
    // UPDATE SOME FEILDS OF THE DATA:
    ProductService.prototype.updateSomeData = function (id, feedPost) {
        return (0, rxjs_1.from)(this.ProductPostRepository.update(id, feedPost));
    };
    // DELETE THE DATA THROUGH ID:
    ProductService.prototype.DeleteData = function (id) {
        return (0, rxjs_1.from)(this.ProductPostRepository["delete"](id));
    };
    ProductService = __decorate([
        (0, common_1.Injectable)(),
        __param(0, (0, typeorm_1.InjectRepository)(product_entity_1.ProductPostEntity))
    ], ProductService);
    return ProductService;
}());
exports.ProductService = ProductService;

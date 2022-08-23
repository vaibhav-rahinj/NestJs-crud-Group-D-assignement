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
exports.ProductController = void 0;
var common_1 = require("@nestjs/common");
var ProductController = /** @class */ (function () {
    function ProductController(ProductService) {
        this.ProductService = ProductService;
    }
    ProductController.prototype.create = function (productPost) {
        return this.ProductService.createPost(productPost);
    };
    ProductController.prototype.findPost = function () {
        return this.ProductService.findAllPost();
    };
    ProductController.prototype.findPostId = function (id) {
        return this.ProductService.findById(id);
    };
    ProductController.prototype.findPostQuery = function (id) {
        return this.ProductService.findByQuery(id);
    };
    ProductController.prototype.updatePost = function (id, productPost) {
        return this.ProductService.updateData(id, productPost);
    };
    ProductController.prototype.updateSomeData = function (id, feedPost) {
        return this.ProductService.updateSomeData(id, feedPost);
    };
    ProductController.prototype.deletePost = function (id) {
        return this.ProductService.DeleteData(id);
    };
    __decorate([
        (0, common_1.Post)(),
        __param(0, (0, common_1.Body)())
    ], ProductController.prototype, "create");
    __decorate([
        (0, common_1.Get)('/allData')
    ], ProductController.prototype, "findPost");
    __decorate([
        (0, common_1.Get)(':id'),
        __param(0, (0, common_1.Param)('id', new common_1.ParseUUIDPipe({ errorHttpStatusCode: common_1.HttpStatus.NOT_ACCEPTABLE })))
    ], ProductController.prototype, "findPostId");
    __decorate([
        (0, common_1.Get)(),
        __param(0, (0, common_1.Query)('id', new common_1.ParseUUIDPipe({ errorHttpStatusCode: common_1.HttpStatus.NOT_ACCEPTABLE })))
    ], ProductController.prototype, "findPostQuery");
    __decorate([
        (0, common_1.Put)(':id'),
        __param(0, (0, common_1.Param)('id', new common_1.ParseUUIDPipe({ errorHttpStatusCode: common_1.HttpStatus.NOT_ACCEPTABLE }))),
        __param(1, (0, common_1.Body)())
    ], ProductController.prototype, "updatePost");
    __decorate([
        (0, common_1.Patch)(':id'),
        __param(0, (0, common_1.Param)('id', new common_1.ParseUUIDPipe({ errorHttpStatusCode: common_1.HttpStatus.NOT_ACCEPTABLE }))),
        __param(1, (0, common_1.Body)())
    ], ProductController.prototype, "updateSomeData");
    __decorate([
        (0, common_1.Delete)(':id'),
        __param(0, (0, common_1.Param)('id', new common_1.ParseUUIDPipe({ errorHttpStatusCode: common_1.HttpStatus.NOT_ACCEPTABLE })))
    ], ProductController.prototype, "deletePost");
    ProductController = __decorate([
        (0, common_1.Controller)('feed')
    ], ProductController);
    return ProductController;
}());
exports.ProductController = ProductController;

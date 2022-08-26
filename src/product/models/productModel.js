"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CreateUserModel = void 0;
var class_validator_1 = require("class-validator");
var product_entity_1 = require("./product.entity");
var CreateUserModel = /** @class */ (function () {
    function CreateUserModel() {
    }
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsString)()
    ], CreateUserModel.prototype, "productName");
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsInt)()
    ], CreateUserModel.prototype, "price");
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsEnum)(product_entity_1.ProductData)
    ], CreateUserModel.prototype, "stock");
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsEnum)(product_entity_1.ProductSize)
    ], CreateUserModel.prototype, "size");
    __decorate([
        (0, class_validator_1.IsNotEmpty)()
    ], CreateUserModel.prototype, "image");
    return CreateUserModel;
}());
exports.CreateUserModel = CreateUserModel;

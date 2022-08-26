"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.EmpCrudModule = void 0;
var common_1 = require("@nestjs/common");
var emp_crud_service_1 = require("./services/emp-crud.service");
var typeorm_1 = require("@nestjs/typeorm");
var post_entity_1 = require("./models/post.entity");
var emp_crud_controller_1 = require("./controller/emp-crud.controller");
var EmpCrudModule = /** @class */ (function () {
    function EmpCrudModule() {
    }
    EmpCrudModule = __decorate([
        (0, common_1.Module)({
            imports: [typeorm_1.TypeOrmModule.forFeature([post_entity_1.EmpCrudEntity])],
            providers: [emp_crud_service_1.EmpCrudService],
            controllers: [emp_crud_controller_1.EmpCrudController]
        })
    ], EmpCrudModule);
    return EmpCrudModule;
}());
exports.EmpCrudModule = EmpCrudModule;

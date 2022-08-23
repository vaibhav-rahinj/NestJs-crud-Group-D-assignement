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
exports.EmpCrudService = void 0;
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var rxjs_1 = require("rxjs");
var post_entity_1 = require("../models/post.entity");
var EmpCrudService = /** @class */ (function () {
    function EmpCrudService(EmployeePostRepository) {
        this.EmployeePostRepository = EmployeePostRepository;
    }
    EmpCrudService.prototype.getemployeeById = function (id) {
        return (0, rxjs_1.from)(this.EmployeePostRepository.findOneBy({ id: id }));
    };
    EmpCrudService.prototype.createPost = function (employeePost) {
        return (0, rxjs_1.from)(this.EmployeePostRepository.save(employeePost));
    };
    EmpCrudService.prototype.findAllPosts = function () {
        return (0, rxjs_1.from)(this.EmployeePostRepository.find());
    };
    EmpCrudService.prototype.updatePutPost = function (id, employeePost) {
        return (0, rxjs_1.from)(this.EmployeePostRepository.update(id, employeePost));
    };
    EmpCrudService.prototype.updatePatchPost = function (id, employeePost) {
        return (0, rxjs_1.from)(this.EmployeePostRepository.update(id, employeePost));
    };
    EmpCrudService.prototype.deletePost = function (id) {
        return (0, rxjs_1.from)(this.EmployeePostRepository["delete"](id));
    };
    EmpCrudService = __decorate([
        (0, common_1.Injectable)(),
        __param(0, (0, typeorm_1.InjectRepository)(post_entity_1.EmpCrudEntity))
    ], EmpCrudService);
    return EmpCrudService;
}());
exports.EmpCrudService = EmpCrudService;

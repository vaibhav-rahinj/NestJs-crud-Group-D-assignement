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
exports.EmpCrudController = void 0;
var common_1 = require("@nestjs/common");
var EmpCrudController = /** @class */ (function () {
    function EmpCrudController(employeeService) {
        this.employeeService = employeeService;
    }
    EmpCrudController.prototype.getemployeeById = function (id) {
        return this.employeeService.getemployeeById(id);
    };
    EmpCrudController.prototype.create = function (employeePost) {
        return this.employeeService.createPost(employeePost);
    };
    EmpCrudController.prototype.findAll = function () {
        return this.employeeService.findAllPosts();
    };
    EmpCrudController.prototype.update = function (id, employeeInterface) {
        return this.employeeService.updatePutPost(id, employeeInterface);
    };
    EmpCrudController.prototype.updatePatch = function (id, employeePost) {
        return this.employeeService.updatePatchPost(id, employeePost);
    };
    EmpCrudController.prototype["delete"] = function (id) {
        return this.employeeService.deletePost(id);
    };
    __decorate([
        (0, common_1.Get)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], EmpCrudController.prototype, "getemployeeById");
    __decorate([
        (0, common_1.Post)(),
        __param(0, (0, common_1.Body)())
    ], EmpCrudController.prototype, "create");
    __decorate([
        (0, common_1.Get)()
    ], EmpCrudController.prototype, "findAll");
    __decorate([
        (0, common_1.Put)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)())
    ], EmpCrudController.prototype, "update");
    __decorate([
        (0, common_1.Patch)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)())
    ], EmpCrudController.prototype, "updatePatch");
    __decorate([
        (0, common_1.Delete)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], EmpCrudController.prototype, "delete");
    EmpCrudController = __decorate([
        (0, common_1.Controller)('employee')
    ], EmpCrudController);
    return EmpCrudController;
}());
exports.EmpCrudController = EmpCrudController;

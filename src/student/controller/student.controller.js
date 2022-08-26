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
exports.StudentController = void 0;
var common_1 = require("@nestjs/common");
var StudentController = /** @class */ (function () {
    function StudentController(studentService) {
        this.studentService = studentService;
    }
    StudentController.prototype.create = function (studentPost) {
        return this.studentService.createPost(studentPost);
    };
    StudentController.prototype.findAll = function () {
        return this.studentService.findAllPosts();
    };
    StudentController.prototype.update = function (id, studentInterface) {
        return this.studentService.updatePutPost(id, studentInterface);
    };
    StudentController.prototype.updatePatch = function (id, studentPost) {
        return this.studentService.updatePatchPost(id, studentPost);
    };
    StudentController.prototype["delete"] = function (id) {
        return this.studentService.deletePost(id);
    };
    StudentController.prototype.getStudentById = function (id) {
        return this.studentService.getstudentById(id);
    };
    __decorate([
        (0, common_1.Post)('stdCreate'),
        __param(0, (0, common_1.Body)())
    ], StudentController.prototype, "create");
    __decorate([
        (0, common_1.Get)('stddata')
    ], StudentController.prototype, "findAll");
    __decorate([
        (0, common_1.Put)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)())
    ], StudentController.prototype, "update");
    __decorate([
        (0, common_1.Patch)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)())
    ], StudentController.prototype, "updatePatch");
    __decorate([
        (0, common_1.Delete)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], StudentController.prototype, "delete");
    __decorate([
        (0, common_1.Get)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], StudentController.prototype, "getStudentById");
    StudentController = __decorate([
        (0, common_1.Controller)('student')
    ], StudentController);
    return StudentController;
}());
exports.StudentController = StudentController;

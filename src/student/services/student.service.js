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
exports.StudentService = void 0;
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var rxjs_1 = require("rxjs");
var student_entity_1 = require("../entity/student.entity");
var StudentService = /** @class */ (function () {
    function StudentService(studentPostRepository) {
        this.studentPostRepository = studentPostRepository;
    }
    StudentService.prototype.createPost = function (studentPost) {
        return (0, rxjs_1.from)(this.studentPostRepository.save(studentPost));
    };
    StudentService.prototype.findAllPosts = function () {
        return (0, rxjs_1.from)(this.studentPostRepository.find());
    };
    StudentService.prototype.updatePutPost = function (id, studentPost) {
        return (0, rxjs_1.from)(this.studentPostRepository.update(id, studentPost));
    };
    StudentService.prototype.updatePatchPost = function (id, studentPost) {
        return (0, rxjs_1.from)(this.studentPostRepository.update(id, studentPost));
    };
    StudentService.prototype.deletePost = function (id) {
        return (0, rxjs_1.from)(this.studentPostRepository["delete"](id));
    };
    StudentService.prototype.getstudentById = function (id) {
        // const student_id = id;
        return (0, rxjs_1.from)(this.studentPostRepository.findOneBy({ id: id }));
    };
    StudentService = __decorate([
        (0, common_1.Injectable)(),
        __param(0, (0, typeorm_1.InjectRepository)(student_entity_1.student))
    ], StudentService);
    return StudentService;
}());
exports.StudentService = StudentService;

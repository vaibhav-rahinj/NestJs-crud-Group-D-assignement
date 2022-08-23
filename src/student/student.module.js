"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.StudentModule = void 0;
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var student_entity_1 = require("./entity/student.entity");
var student_controller_1 = require("./controller/student.controller");
var student_service_1 = require("./services/student.service");
var StudentModule = /** @class */ (function () {
    function StudentModule() {
    }
    StudentModule = __decorate([
        (0, common_1.Module)({
            imports: [typeorm_1.TypeOrmModule.forFeature([student_entity_1.student])],
            controllers: [student_controller_1.StudentController],
            providers: [student_service_1.StudentService]
        })
    ], StudentModule);
    return StudentModule;
}());
exports.StudentModule = StudentModule;
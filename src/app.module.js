"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
// import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import { EmpCrudModule } from './emp-crud/emp-crud.module';
// import { ConfigModule, ConfigService } from '@nestjs/config';
// @Module({
//   imports: [
//     EmpCrudModule,
//     TypeOrmModule.forRootAsync({
//       imports: [
//         ConfigModule.forRoot({
//           isGlobal: true,
//           envFilePath: '.env',
//         }),
//       ],
//       useFactory: (configService: ConfigService) => ({
//         type: 'postgres',
//         host: configService.get('DB_HOST'),
//         port: configService.get<number>('DB_PORT'),
//         username: configService.get('DB_USERNAME'),
//         password: configService.get('DB_PASSWORD'),
//         database: configService.get('DB_DATABASE'),
//         synchronize: configService.get<boolean>('DB_SYNC'),
//         entities: [__dirname + '/**/*.entity{.ts,.js}'],
//         //synchronize: true,
//         // logging:true
//       }),
//       inject: [ConfigService],
//     }),
//   ],
//   controllers: [AppController],
var book_module_1 = require("./book/book.module");
var config_1 = require("@nestjs/config");
var typeorm_1 = require("@nestjs/typeorm");
var user_module_1 = require("./user/user.module");
var app_service_1 = require("./app.service");
var common_1 = require("@nestjs/common");
var app_controller_1 = require("./app.controller");
var emp_crud_module_1 = require("./emp-crud/emp-crud.module");
var student_module_1 = require("./student/student.module");
var platform_express_1 = require("@nestjs/platform-express");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        (0, common_1.Module)({
            imports: [
                config_1.ConfigModule.forRoot({ isGlobal: true }),
                // ConfigModule.forRoot({isGlobal:true}),
                typeorm_1.TypeOrmModule.forRoot({
                    type: 'postgres',
                    host: process.env.POSTGRES_HOST,
                    port: parseInt(process.env.POSTGRES_PORT),
                    username: process.env.POSTGRES_USER,
                    password: process.env.POSTGRES_PASSWORD,
                    database: process.env.POSTGRES_DATABASE,
                    autoLoadEntities: true,
                    synchronize: true
                }),
                platform_express_1.MulterModule.register({ dest: './images' }),
                book_module_1.BookModule,
                user_module_1.UserModule,
                student_module_1.StudentModule,
                emp_crud_module_1.EmpCrudModule,
            ],
            controllers: [app_controller_1.AppController],
            providers: [app_service_1.AppService]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

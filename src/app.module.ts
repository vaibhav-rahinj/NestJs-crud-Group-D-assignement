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
import { BookModule } from './book/book.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { AppService } from './app.service';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { EmpCrudModule } from './emp-crud/emp-crud.module';
import { StudentModule } from './student/student.module';
import { MulterModule } from '@nestjs/platform-express';
import { CategoryModule } from './book/category/category.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    // ConfigModule.forRoot({isGlobal:true}),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(<string>process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      autoLoadEntities: true,
      synchronize: true,
    }),

    BookModule,
    CategoryModule,
    UserModule,
    StudentModule,
    EmpCrudModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

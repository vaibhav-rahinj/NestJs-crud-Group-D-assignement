<<<<<<< HEAD
// import { ValidationPipe } from '@nestjs/common';
// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   app.useGlobalPipes(new ValidationPipe({
//     disableErrorMessages:false,
//     whitelist:true,
//     forbidNonWhitelisted:true
//   }))
//   // app.setGlobalPrefix('book');
//   await app.listen(3003);
// }
// bootstrap();

=======
>>>>>>> 2bf5dfe05a9c876f167ebe478bc96930635b7641
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
<<<<<<< HEAD
  const config = new DocumentBuilder()
    .setTitle('Book Management')
    .setDescription('Add show Edit Delete -> Book data')
    .setVersion('1.0')
    .addTag('Group D Assignment')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
=======

  const config = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

>>>>>>> 2bf5dfe05a9c876f167ebe478bc96930635b7641
  await app.listen(3000);
}
bootstrap();
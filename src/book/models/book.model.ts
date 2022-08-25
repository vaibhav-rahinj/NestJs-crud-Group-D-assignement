import {  IsInt, IsNotEmpty,  IsString, MaxLength, MinLength } from 'class-validator';

export class BookModel {
  @IsNotEmpty() @IsInt()
  @MinLength(1)
  @MaxLength(6)
  book_id: number;

  @IsNotEmpty()  @IsString()
  @MinLength(3)
  @MaxLength(30) book_name: string;

  @IsNotEmpty() @IsString()
  @MinLength(3)
  @MaxLength(30) author: string;

  @IsNotEmpty() @IsInt()
  @MinLength(2)
  @MaxLength(6)
   price: number;

  @IsNotEmpty() @IsString()
  @MinLength(4)
  @MaxLength(50)
   book_image: string;

  @IsNotEmpty() @IsString()
  @MinLength(13)
  @MaxLength(13) book_isbn: string;


}
// export class PatchBook {
//     // constructor(parameters) {

//     // }

//     // @IsNotEmpty()
//     //  @IsInt()
//      @IsDefined()
//      book_id: number;

//     // @IsNotEmpty()
//     @IsDefined()
//     //  @IsString()
//       book_name?: string;

//     // @IsNotEmpty()
//     @IsDefined()
//     //  @IsString()
//       author?: string;

//     // @IsNotEmpty()
//     //  @IsNumber()
//      @IsDefined()
//       price?: number;

//     // @IsNotEmpty()
//     @IsDefined()
//     //  @IsString() 
//      book_isbn?: string;

//     // @IsNotEmpty()
//     //  @IsString()
//      @IsDefined()
//      book_image?: string;
// }

import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
export class StudentInterface {
  // @IsNumber()
  id: number;

  @IsString()
  @IsNotEmpty()
  fname: string;

  @IsString()
  @IsNotEmpty()
  lname: string;

  @IsEmail()
  @IsNotEmpty()
  Stud_email: string;

  @IsString()
  @IsNotEmpty()
  Stud_gender: string;

  @IsString()
  @IsNotEmpty()
  Stud_address: string;

  // @IsString()
  // Image:string;
}

import { IsEmail, IsNumber, IsNumberString, IsString } from 'class-validator';
export class StudentInterface {
  @IsNumber()
  id: number;

  @IsString()
  fname: string;

  @IsString()
  lname: string;

  @IsEmail()
  Stud_email: string;

  @IsString()
  Stud_gender: string;

  @IsString()
  Stud_address: string;
  
}

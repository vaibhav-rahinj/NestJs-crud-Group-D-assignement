import { IsEmail, IsInt, IsNotEmpty, IsString } from 'class-validator';
export class EmpCrud {
  @IsInt()
  @IsNotEmpty()
  id: number;

  @IsString()
  @IsNotEmpty()
  empFname: string;

  @IsString()
  @IsNotEmpty()
  empLname: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  // @IsString()
  // emp_gender: string;

  @IsString()
  @IsNotEmpty()
  emp_address: string;

  // @IsString()
  // img: string;
}

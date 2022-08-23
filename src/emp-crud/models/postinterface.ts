import { IsEmail, IsInt, IsString } from 'class-validator';
export class EmpCrud {
  @IsInt()
  id: number;

  @IsString()
  empFname: string;

  @IsString()
  empLname: string;

  @IsEmail()
  emp_email: string;

  @IsString()
  emp_gender: string;

  @IsString()
  emp_address: string;

  @IsString()
  img:string;

}

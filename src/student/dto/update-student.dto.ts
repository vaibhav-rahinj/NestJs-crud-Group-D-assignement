import { IsOptional, IsString } from "class-validator";
export class UpdateStudentDto {
  id: number;
  @IsString() @IsOptional()
  fname?: string;
  lname?: string;
  Stud_email?: string;
  Stud_gender?: string;
  Stud_address?: string;
  Image?: string;
}
import { IsEmail, IsInt, IsString } from 'class-validator';
export class DepCrud {
  @IsInt()
  id: number;

  @IsString()
  depName: string;

  @IsString()
  post: string;
}

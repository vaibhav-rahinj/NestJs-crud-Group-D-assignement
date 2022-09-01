import { IsString } from 'class-validator';
export class SubjectInterface {
  sub_id: number;
  @IsString()
  Sub_name: string;  
}

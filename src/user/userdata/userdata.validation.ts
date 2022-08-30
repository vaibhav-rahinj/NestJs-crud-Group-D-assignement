import {
    IsInt,
     IsNotEmpty }
from "class-validator";
export class ValidateUserdata{
    @IsNotEmpty() @IsInt() Id:number;
    // @IsNotEmpty() @IsInt() Center_Id: number;
    // @IsNotEmpty() @IsInt() User_Id: number;
        
}
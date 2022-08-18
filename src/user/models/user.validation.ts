import {
    IsEmail, IsInt, IsNotEmpty, IsString, }
from "class-validator";
export class ValidateUser{
    @IsNotEmpty() @IsInt() User_Id: number;
    @IsNotEmpty() @IsString() User_Name: string;
    @IsNotEmpty() @IsEmail() Email: string;
    @IsNotEmpty() @IsString() Roles: string;
    @IsNotEmpty() @IsString() Gender: string;
    // @IsNotEmpty() @IsInt() Mobile_no: number;
    @IsNotEmpty() @IsString() State: string;
    @IsNotEmpty() @IsString() Country: string;
}
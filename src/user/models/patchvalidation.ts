import { ApiProperty } from "@nestjs/swagger";
import {
    IsEmail,  IsNotEmpty, IsOptional, IsString, }
from "class-validator";
export class PatchValidateUser{
    // @IsNotEmpty() @IsInt() User_Id: number;
    @IsNotEmpty() @IsString() @IsOptional() @ApiProperty ({required: false}) User_Name: string;
    @IsNotEmpty() @IsEmail() @IsOptional() @ApiProperty ({required: false}) Email: string;
    @IsNotEmpty() @IsString() @IsOptional() @ApiProperty ({required: false}) Roles: string;
    @IsNotEmpty() @IsString()@IsOptional() @ApiProperty ({required: false})  Gender: string;
    @IsNotEmpty() @IsString() @IsOptional() @ApiProperty ({required: false}) Exam_Center: string;
    // @IsNotEmpty() @IsInt() Mobile_no: number;
    // @IsNotEmpty() @IsString() Address: string;
    @IsNotEmpty() @IsString() @IsOptional() @ApiProperty ({required: false}) State: string;
    @IsNotEmpty() @IsString() @IsOptional() @ApiProperty ({required: false}) Country: string;
    // @IsNotEmpty() @IsString() User_img: string;

}
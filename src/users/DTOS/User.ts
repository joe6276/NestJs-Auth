
import { IsString, IsEmail, IsNotEmpty , } from "class-validator"

export class UserDTO{
    @IsNotEmpty()
    @IsString()
    username:string

    @IsNotEmpty()
    @IsString()
    password:string

    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email:string

    @IsNotEmpty()
    @IsString()
    name:string
}
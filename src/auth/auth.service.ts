import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { UserDTO } from 'src/users/DTOS/User';

@Injectable()
export class AuthService {
    constructor( @Inject(forwardRef(() => UsersService)) private userService:UsersService, private jwtService:JwtService){}
    async validateUser(username:string, password:string){
        const user =await this.userService.getOne(username)
        if(user && user.password===password){
            const {password, ...result} = user
            return result;
        }
        return null
    }

    async login(user:UserDTO){
        const payload={name:user.name, username:user.username}

        return {
            token:this.jwtService.sign(payload)
        }
    }

}

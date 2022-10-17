import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { UserDTO } from 'src/users/DTOS/User';

@Injectable()
export class AuthService {
    constructor( @Inject(forwardRef(() => UsersService)) private userService:UsersService,
     private jwtService:JwtService){}
    async validateUser(email:string, pass:string){
        const user =await this.userService.getOne(email)
        if(user && user.password===pass){
            const {password, ...result} = user
            return result;
        }

        return null
    }

    async login(user:any){
        const payload={name:user.name, username:user.username}

        return {
            access_token: this.jwtService.sign(payload),
        }
    }

}

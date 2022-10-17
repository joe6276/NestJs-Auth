import { Body, Controller, forwardRef, Get, Inject,Request, Param, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { LocalAuthGuard } from './guards/auth.gard';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './guards/JWT.auth.Guard';
import { UserDTO } from './users/DTOS/User';
import { UsersService } from './users/users.service';

@Controller()
export class AppController {
 constructor(private userService:UsersService, @Inject(forwardRef(() => AuthService)) private authService:AuthService){}

 @Get()
 getUsers(){
    return this.userService.getUsers()
 }
 @Get('/:username')
 getUser(@Param('username') username:string){
    return this.userService.getOne(username)
 }

 @Post()
 @UsePipes(ValidationPipe)
 createUser(@Body() user:UserDTO){
    return this.userService.addUsers(user)
 }
@UseGuards(LocalAuthGuard)
 @Post('login')
 logUser(@Request() req){
       return this.authService.login(req.user)
 }

@UseGuards(JwtAuthGuard) 
@Get('profile')
  getProfile(@Request() req:any) {
    return req.user
    
  }
}

import { Controller, Param,Post,Body, Get,UsePipes,ValidationPipe,UseGuards,Request, 
   Inject, forwardRef } from '@nestjs/common';
import { LocalAuthGuard } from 'src/guards/auth.gard';
import { AuthService } from 'src/auth/auth.service';import { JwtAuthGuard } from 'src/guards/JWT.auth.Guard';
;
import { UserDTO } from './DTOS/User';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
 constructor(private userService:UsersService, @Inject(forwardRef(() => AuthService)) private authService:AuthService){}

 @Get()
 getUsers(){
    return this.userService.getUsers()
 }
 @Post()
 @UsePipes(ValidationPipe)
 createUser(@Body() user:UserDTO){
    return this.userService.addUsers(user)
 }
  @Get('api/:username')
 getUser(@Param('username') username:string){
    return this.userService.getOne(username)
 } 
@UseGuards(LocalAuthGuard)
 @Post('login')
 logUser(@Request() req){
   console.log(req.user);
   
       return this.authService.login(req.user)
 }
 @UseGuards(JwtAuthGuard)
  @Get('/profile/')
  getProfile() {
  return this.userService.getProf()
    
  }



}

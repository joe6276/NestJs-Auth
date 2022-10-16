import { Controller, Param,Post,Body, Get,UsePipes,ValidationPipe,UseGuards,Request, Inject, forwardRef } from '@nestjs/common';
import { LocalAuthGuard } from 'src/auth/auth.gard';
import { AuthService } from 'src/auth/auth.service';
import { authenticatedGuard } from 'src/auth/AuthenticatedGuard';
import { JwtAuthGuard } from 'src/auth/JWT.auth.Guard';
import { UserDTO } from './DTOS/User';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
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
  getProfile(@Request() req) {
    return req.user;
  }
}

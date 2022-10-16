import { forwardRef, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';
import { AuthService } from './auth.service';
import { JWTStrategy } from './Jwt.Strategy';
import { LocalStrategy } from './local.strategy';

@Module({
  providers: [AuthService,LocalStrategy, JWTStrategy],
  imports:[forwardRef(() => UsersModule),PassportModule,  JwtModule.register({
    secret:'fdgfsdhgbjdfsghfdsgdfgjjdfgkjsdfjg',
    signOptions:{expiresIn:'60s'}
  })],
  exports:[AuthService]
})
export class AuthModule {}

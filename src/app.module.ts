import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserEntity } from './users/Entities/UserEntity';
import { UsersModule } from './users/users.module';

@Module({
  imports: [AuthModule, UsersModule, TypeOrmModule.forRoot({
    type:'sqlite',
    database:'users.sqlite',
    synchronize:true,
    entities:[UserEntity]
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

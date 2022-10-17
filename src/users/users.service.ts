import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDTO } from 'src/users/DTOS/User';
import { UserEntity } from 'src/users/Entities/UserEntity';
import { Repository } from 'typeorm';
@Injectable()
export class UsersService {
    constructor(@InjectRepository(UserEntity) private repo:Repository<UserEntity>){}


getUsers(){
return this.repo.find()
}


addUsers(User:UserDTO){
    const user = this.repo.create(User)
    return this.repo.save(user)
}

getOne(email:string){
    return this.repo.findOne({where:{email}})
}

getProf(){
    return {name:"John Doe"}
}



}

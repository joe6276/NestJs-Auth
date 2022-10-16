
import {Column , PrimaryGeneratedColumn, DeleteDateColumn , Unique, Entity} from 'typeorm'
@Entity()
@Unique(['username'])
export class UserEntity{
    @PrimaryGeneratedColumn()
    id:string
    
    @Column()
    name:string
    
    @Column()
    email:string

    @Column()
    password:string

    @Column()

    username:string


    @DeleteDateColumn()
    deletedAt:Date

}
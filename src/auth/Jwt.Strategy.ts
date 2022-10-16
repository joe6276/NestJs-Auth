import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";

import {ExtractJwt,Strategy} from 'passport-jwt'

@Injectable()
export class JWTStrategy extends PassportStrategy(Strategy){
    constructor(){
        super({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration:false,
            secretOrKey:'fdgfsdhgbjdfsghfdsgdfgjjdfgkjsdfjg'
        })
    }

    async validate(payload:any){
        return {
            username:payload.username,
            name:payload.name
        }
    }
}
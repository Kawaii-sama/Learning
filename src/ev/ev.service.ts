import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EvService {
    constructor (private configureSerive: ConfigService) {}
    getDbUrl(){
        return this.configureSerive.get<string>('DATABASE_URL')
    }
}

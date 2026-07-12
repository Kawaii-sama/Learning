import { Injectable } from '@nestjs/common';
import { ConfigureService } from '@nestjs/common';

@Injectable()
export class EvService {
    constructor (private configureSerive: ConfigureService) {}
    getDbUrl(){
        return this.configureSerive.get<string>('DATABASE_URL')
    }
}

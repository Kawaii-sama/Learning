import { Injectable } from '@nestjs/common';

@Injectable() // used in services
export class CategoryService {
    getCategories(){
        return ['Mobile', 'Tablet', 'Laptop'];
    }
}

import { Controller, Get } from '@nestjs/common';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {

    constructor (private readonly categorySerivce:CategoryService){}

    @Get()
    getAllCategories() {
        return this.categorySerivce.getCategories();

    }
}

import { Controller } from '@nestjs/common';

@Controller('product')
export class ProductController {
    constructor (private readonly productService: ProductService){}

    @Get()
    getProducts() {
        return this.productService.getAllProducts();
    }

    @Get(:'id')
    getProduct(@Param('id') id: string) {
        return this.productService.getProductById(Number(id))
    }
}

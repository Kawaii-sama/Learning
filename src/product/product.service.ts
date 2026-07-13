import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
    private Products = [
        {id : 1, name: "Mobile", price: 300000},
        {id : 2, name: "Laptop", price: 1000000},
        {id : 3, name: "Computer", price: 20000000},
    ]

    getAllProducts() {
        return this.Products;
    }
    getProductById(id: number) {
        return this.Products.find((product) => product.id === id);
    }
}

import { Injectable } from '@nestjs/common';
import { Product } from '../domain';

const products = [
  new Product('1', 'abc'),
];

@Injectable()
export class ProductService {

  getProducts(): Product[] {
    return products;
  }
}

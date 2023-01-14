import { Controller, Get } from '@nestjs/common';
import { ProductDto } from '../model';

@Controller('products')
export class ProductController {
  @Get()
  getProducts(): ProductDto[] {
    return [];
  }
}

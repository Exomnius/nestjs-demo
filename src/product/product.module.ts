import { Module } from '@nestjs/common';
import { ProductController } from './rest';
import { ProductService } from './service';

@Module({
  imports: [],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}

import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './product.schema';
import { CreateProductInput } from './dto/create-product.input';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {
  }

  @Get()
  products(): Promise<Product[]> {
    return this.productService.findAll();
  }

  @Get(':id')
  getProduct(@Param('id') id: string): Promise<Product> {
    return this.productService.findOne(id);
  }

  @Post()
  async createProduct(@Body() input: CreateProductInput) {
    return this.productService.create(input);
  }
}

import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Product } from './product.schema';
import { ProductService } from './product.service';
import { CreateProductInput } from './dto/create-product.input';

@Resolver(() => Product)
export class ProductResolver {
  constructor(private productService: ProductService) {
  }

  @Mutation(() => Product)
  async createProduct(@Args('input') input: CreateProductInput) {
    return this.productService.create(input);
  }

  @Query(() => Product)
  getProduct(@Args('id', { type: () => String }) id: string): Promise<Product> {
    return this.productService.findOne(id);
  }

  @Query(() => [Product])
  products(): Promise<Product[]> {
    return this.productService.findAll();
  }
}

import { Injectable } from '@nestjs/common';
import { Product } from './product.schema';
import { Model } from 'mongoose';
import { CreateProductInput } from './dto/create-product.input';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ProductService {

  constructor(@InjectModel(Product.name) private productModel: Model<Product>) {
  }

  async findAll(): Promise<Product[]> {
    return this.productModel.find().lean();
  }

  async findOne(id: string): Promise<Product> {
    return this.productModel.findById(id).orFail();
  }

  async create(input: CreateProductInput): Promise<Product> {
    return this.productModel.create(input);
  }
}

import { Injectable } from '@nestjs/common';
import { CreateOrderInput } from './dto/create-order.input';
import { InjectModel } from '@nestjs/mongoose';
import { Order } from './entities/order.entity';
import { Model } from 'mongoose';
import { OrderLine } from './entities/order-line.entity';
import { UserService } from '../user/user.service';
import { AddOrderLineInput } from './dto/add-order-line.input';
import { ProductService } from '../product/product.service';

@Injectable()
export class OrderService {
  constructor(
    @InjectModel(Order.name) private orderModel: Model<Order>,
    @InjectModel(OrderLine.name) private orderLineModel: Model<OrderLine>,
    private userService: UserService,
    private productService: ProductService) {
  }

  async create(input: CreateOrderInput) {
    const user = await this.userService.findOne(input.userId);
    const order = new this.orderModel({
      user,
      totalValue: 0
    });
    return order.save();
  }

  async addOrderLine(orderId: string, input: AddOrderLineInput) {
    const order = await this.getOrder(orderId);
    const product = await this.productService.findOne(input.productId);
    const orderLine = new this.orderLineModel({
      product,
      quantity: input.quantity,
      totalValue: product.price * input.quantity
    });
    await orderLine.save();
    order.orderLines ||= [];
    order.orderLines.push(orderLine);
    return order.save();
  }

  async findAll() {
    return this.orderModel.find()
      .populate('user')
      .populate({ path: 'orderLines', populate: { path: 'product' } });
  }

  findOne(id: string) {
    return this.getOrder(id);
  }

  private getOrder(id: string) {
    return this.orderModel.findById(id)
      .populate('user')
      .populate({ path: 'orderLines', populate: { path: 'product' } })
      .orFail();
  }
}

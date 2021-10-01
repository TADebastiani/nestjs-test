import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderInput } from './dto/create-order.input';
import { AddOrderLineInput } from './dto/add-order-line.input';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {
  }

  @Get()
  findAll() {
    return this.orderService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orderService.findOne(id);
  }

  @Post()
  createOrder(@Body() input: CreateOrderInput) {
    return this.orderService.create(input);
  }

  @Put(':id')
  addOrderLine(
    @Param('id') id: string,
    @Body() input: AddOrderLineInput) {
    return this.orderService.addOrderLine(id, input);
  }
}

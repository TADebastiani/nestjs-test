import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { OrderService } from './order.service';
import { Order } from './entities/order.entity';
import { CreateOrderInput } from './dto/create-order.input';
import { AddOrderLineInput } from './dto/add-order-line.input';

@Resolver(() => Order)
export class OrderResolver {
  constructor(private readonly orderService: OrderService) {
  }

  @Mutation(() => Order)
  createOrder(@Args('input') input: CreateOrderInput) {
    return this.orderService.create(input);
  }

  @Query(() => [Order], { name: 'orders' })
  findAll() {
    return this.orderService.findAll();
  }

  @Query(() => Order, { name: 'order' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.orderService.findOne(id);
  }

  @Mutation(() => Order)
  addOrderLine(
    @Args('id') id: string,
    @Args('input') input: AddOrderLineInput) {
    return this.orderService.addOrderLine(id, input);
  }
}

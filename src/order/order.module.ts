import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderResolver } from './order.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Order, OrderSchema } from './entities/order.entity';
import { OrderLine, OrderLineSchema } from './entities/order-line.entity';
import { UserModule } from '../user/user.module';
import { ProductModule } from '../product/product.module';
import { OrderController } from './order.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Order.name, schema: OrderSchema },
      { name: OrderLine.name, schema: OrderLineSchema }
    ]),
    UserModule,
    ProductModule],
  providers: [OrderResolver, OrderService],
  controllers: [OrderController]
})
export class OrderModule {
}

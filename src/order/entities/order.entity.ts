import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { User } from '../../user/user.schema';
import { OrderLine } from './order-line.entity';

@ObjectType()
@Schema()
export class Order extends Document {
  @Field()
  _id: string;

  @Field(() => User)
  @Prop({ type: Types.ObjectId, ref: User.name })
  user: User;

  @Field(() => [OrderLine], { nullable: true })
  @Prop({ type: [{ type: Types.ObjectId, ref: OrderLine.name }] })
  orderLines: OrderLine[];

  @Field()
  @Prop({ default: 0 })
  totalValue: number;
}

export const OrderSchema = SchemaFactory.createForClass(Order);

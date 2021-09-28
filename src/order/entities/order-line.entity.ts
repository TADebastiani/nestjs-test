import { Document, Types } from 'mongoose';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Product } from '../../product/product.schema';

@ObjectType()
@Schema()
export class OrderLine extends Document {
  @Field()
  _id: string;

  @Field(() => Product)
  @Prop({ type: Types.ObjectId, ref: Product.name })
  product: Product;

  @Field(() => Int)
  @Prop()
  quantity: number;

  @Field()
  @Prop()
  totalValue: number;
}

export const OrderLineSchema = SchemaFactory.createForClass(OrderLine);
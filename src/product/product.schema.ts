import { Document } from 'mongoose';
import { Field, Float, Int, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@ObjectType()
@Schema()
export class Product extends Document {
  @Field()
  _id: string;

  @Field()
  @Prop({ required: true })
  name: string;

  @Field(() => Float)
  @Prop({ required: true })
  price: number;

  @Field()
  @Prop({ required: true })
  category: string;

  @Field(() => Int)
  @Prop({ required: true })
  available: number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
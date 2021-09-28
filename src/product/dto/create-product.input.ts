import { Field, Float, InputType, Int } from '@nestjs/graphql';
import { IsInt, IsNotEmpty, IsNumber } from 'class-validator';

@InputType()
export class CreateProductInput {
  @Field()
  @IsNotEmpty()
  name: string;

  @Field(() => Float)
  @IsNumber({ maxDecimalPlaces: 2 })
  price: number;

  @Field()
  @IsNotEmpty()
  category: string;

  @Field(() => Int)
  @IsInt()
  available: number;
}
import { CreateOrderInput } from './create-order.input';
import { Field, InputType, Int, PartialType } from '@nestjs/graphql';
import { IsMongoId, IsNotEmpty, IsNumber } from 'class-validator';

@InputType()
export class AddOrderLineInput extends PartialType(CreateOrderInput) {
  @Field()
  @IsMongoId()
  @IsNotEmpty()
  productId: string;

  @Field(() => Int)
  @IsNumber({ maxDecimalPlaces: 0 })
  @IsNotEmpty()
  quantity: number;
}

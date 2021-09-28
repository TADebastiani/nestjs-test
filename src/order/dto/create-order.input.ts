import { Field, InputType } from '@nestjs/graphql';
import { IsMongoId } from 'class-validator';

@InputType()
export class CreateOrderInput {
  @Field(() => String)
  @IsMongoId()
  userId: string;
}

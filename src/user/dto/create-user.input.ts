import { Field, InputType, Int } from '@nestjs/graphql';
import { IsAlpha, IsEmail, IsInt, IsNotEmpty } from 'class-validator';

@InputType()
export class CreateUserInput {
  @Field()
  @IsNotEmpty()
  name: string;

  @Field()
  @IsEmail()
  email: string;

  @Field()
  @IsAlpha()
  login: string;

  @Field(() => Int)
  @IsInt()
  password: number;
}
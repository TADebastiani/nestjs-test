import { Field, InputType, Int } from '@nestjs/graphql';
import { IsAlpha, IsEmail, IsInt, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

@InputType()
export class CreateUserInput {
  @Field()
  @IsNotEmpty()
  @ApiProperty({ example: 'Fulano da Silva' })
  name: string;

  @Field()
  @IsEmail()
  @ApiProperty({ example: 'fulano@email.com' })
  email: string;

  @Field()
  @IsAlpha()
  @ApiProperty({ example: 'fulaninho' })
  login: string;

  @Field(() => Int)
  @IsInt()
  @ApiProperty({ example: 123456 })
  password: number;
}
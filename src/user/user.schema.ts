import { Document } from 'mongoose';
import { Field, HideField, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Exclude } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

@Schema()
@ObjectType()
export class User extends Document{
  @Field()
  @ApiProperty({example: '6151fd417f79374ee6fe0241'})
  public _id: string;

  @Field()
  @Prop({ required: true })
  @ApiProperty({example: 'Fulano da Silva'})
  name: string;

  @Field()
  @Prop({ required: true })
  @ApiProperty({example: 'fulano@email.com'})
  email: string;

  @Field()
  @Prop({ required: true })
  @ApiProperty({example: 'fulaninho'})
  login: string;

  @HideField()
  @Prop({ required: true })// TODO: testar o uso da propriedade 'set'
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
import { Document } from 'mongoose';
import { Field, HideField, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Exclude } from 'class-transformer';

@Schema()
@ObjectType()
export class User extends Document{
  @Field()
  public _id: string;

  @Field()
  @Prop({ required: true })
  name: string;

  @Field()
  @Prop({ required: true })
  email: string;

  @Field()
  @Prop({ required: true })
  login: string;

  @HideField()
  @Prop({ required: true })// TODO: testar o uso da propriedade 'set'
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
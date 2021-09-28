import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@ObjectType()
@Schema()
export class Post extends Document {
  @Field()
  _id: string;

  @Field()
  @Prop()
  name: string;
}

export const PostSchema = SchemaFactory.createForClass(Post);

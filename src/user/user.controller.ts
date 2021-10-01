import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.schema';
import { CreateUserInput } from './dto/create-user.input';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {
  }

  @Get()
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Post()
  async create(@Body() body: CreateUserInput) {
    return this.userService.create(body);
  }
}

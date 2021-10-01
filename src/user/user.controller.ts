import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.schema';
import { CreateUserInput } from './dto/create-user.input';
import {
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags
} from '@nestjs/swagger';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {
  }

  @Get()
  @ApiOperation({ summary: 'Find all users' })
  @ApiOkResponse({ description: 'The users', type: [User] })
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Find one user' })
  @ApiOkResponse({ description: 'The found user', type: User })
  @ApiNotFoundResponse({ status: 404, description: 'User not found' })
  async findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create an user' })
  @ApiCreatedResponse({ description: 'User created', type: User })
  @ApiNotFoundResponse({ status: 400, description: 'Invalid input' })
  async create(@Body() body: CreateUserInput) {
    return this.userService.create(body);
  }
}

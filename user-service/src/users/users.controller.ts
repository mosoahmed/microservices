import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {
  }

  // Other CRUD methods

  @MessagePattern({ cmd: 'create' })
  @Post()
  async create(@Body() createUserDto: any) {
    return this.usersService.create(createUserDto);
  }

  @MessagePattern({ cmd: 'findAll' })
  @Get()
  async findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.usersService.delete(id);
  }
}

import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { GatewayService } from './gateway.service';

@Controller('gateway')
export class GatewayController {

  constructor(private readonly gatewayService: GatewayService) {
  }

  // Other CRUD methods
@Get("/hello")
  getHello(): string {
    return "hi from gateway controller"
  }

  @Post('users')
  async createUser(@Body() createUserDto: any) {
    return this.gatewayService.createUser(createUserDto);
  }

  // get users
  @Get('users')
  async findAllUsers() {
    return this.gatewayService.findAllUsers();
  }

  // get user
  @Get('users/:id')
  async findUser(@Param('id') id: string) {
    return this.gatewayService.findUser(id);
  }

  // delete user
  @Delete('users/:id')
  async deleteUser(@Param('id') id: string) {
    return this.gatewayService.deleteUser(id);
  }

  // create task
  @Post('tasks')
  async createTask(@Body() createTaskDto: any) {
    return this.gatewayService.createTask(createTaskDto);
  }

// get tasks
  @Get('tasks')
  async findAllTasks() {
    return this.gatewayService.findAllTasks();
  }

  // get task
  @Get('tasks/:id')
  async findTask(@Param('id') id: string) {
    return this.gatewayService.findTask(id);
  }

  // delete task
  @Delete('tasks/:id')
  async deleteTask(@Param('id') id: string) {
    return this.gatewayService.deleteTask(id);
  }




}

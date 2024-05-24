import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {

  constructor(private readonly tasksService: TasksService) {
  }

  // create task
  @Post()
  async create(@Body() createTaskDto: any) {
    return this.tasksService.create(createTaskDto);
  }

  // find all tasks
  @Get()
  async findAll() {
    return this.tasksService.findAll();
  }

  // find one task by id params
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.tasksService.findOne(id);
  }

  // delete task by id params
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.tasksService.delete(id);
  }
}

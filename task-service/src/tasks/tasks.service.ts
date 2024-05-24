import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Task } from './schemas/task.schema';
import { Model } from 'mongoose';

@Injectable()
export class TasksService {

  constructor(@InjectModel(Task.name) private taskModel: Model<Task>) {}

  async create(task: Task): Promise<Task> {
    const createdTask = new this.taskModel(task);
    return createdTask.save();
  }

  async findAll(): Promise<Task[]> {
    return this.taskModel.find().exec();
  }

  async findOne(id: string): Promise<Task> {
    return this.taskModel.findById(id);
  }

  async delete(id: string): Promise<Task> {
    const task = this.taskModel.findByIdAndDelete(id).exec();
    if (!task) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }
    return task;
  }
}

import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';
import { UsersProxy } from './users.proxy';
import { TasksProxy } from './tasks.proxy';

@Injectable()
export class GatewayService {


  constructor(
    private readonly userClient: UsersProxy,
    private readonly taskClient: TasksProxy,
  ) {}

  // user methods
  // create user
  createUser(user: any) {
    return this.userClient.createUser(user)
  }

  // find all users
  findAllUsers() {
    return this.userClient.findAllUsers();
  }

  // find user
  findUser(id: string) {
    return this.userClient.findUser(id)
  }

  // delete user
  deleteUser(id: string) {
    return this.userClient.deleteUser(id)
  }

  // tasks methods

  // create task
  createTask(task: any) {
    return this.taskClient.createTask(task);
  }

  // find all tasks
  findAllTasks() {
    return this.taskClient.findAllTasks();
  }

  // find task
  findTask(id: string) {
    return this.taskClient.findTask(id);
  }

  // delete task
  deleteTask(id: string) {
    return this.taskClient.deleteTask(id);
  }









}








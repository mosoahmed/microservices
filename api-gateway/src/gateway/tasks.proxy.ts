// api-gateway/src/users/users.proxy.ts
import { Injectable } from '@nestjs/common';
import { Transport, ClientProxy, ClientProxyFactory } from '@nestjs/microservices';

@Injectable()
export class TasksProxy {
  private client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        host: 'task-service', // tasks microservice host
        port: 3002, // tasks microservice port
      },
    });
  }

  // create task
  createTask(task: any) {
    try {
      return this.client.send({ cmd: 'create' }, task);
    } catch (e) {
      console.log(e);
    }
  }

  // find all tasks
  findAllTasks() {
    return this.client.send({ cmd: 'findAll' }, {});
  }

  // find task
  findTask(id: string) {
    return this.client.send({ cmd: 'findOne' }, id);
  }

  // delete task
  deleteTask(id: string) {
    return this.client.send({ cmd: 'delete' }, id);
  }


}
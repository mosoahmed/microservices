// api-gateway/src/users/users.proxy.ts
import { Injectable } from '@nestjs/common';
import { Transport, ClientProxy, ClientProxyFactory } from '@nestjs/microservices';

@Injectable()
export class UsersProxy {
  private client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        host: 'user-service',
        port: 3001, // Users microservice port
      },
    });
  }

  // create user
  createUser(user: any) {
    return this.client.send({ cmd: 'create' }, user);
  }

  // find all users
  findAllUsers() {
   return this.client.send({ cmd: 'findAll' }, {});
  }

  // find user
  findUser(id: string) {
    return this.client.send({ cmd: 'findOne' }, id);
  }

  // delete user
  deleteUser(id: string) {
    return this.client.send({ cmd: 'delete' }, id);
  }


}
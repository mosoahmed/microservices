import { Module } from '@nestjs/common';
import { GatewayController } from './gateway.controller';
import { GatewayService } from './gateway.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { TasksProxy } from './tasks.proxy';
import { UsersProxy } from './users.proxy';

@Module({
  controllers: [GatewayController],
  providers: [TasksProxy, UsersProxy, GatewayService]
})
export class GatewayModule {}

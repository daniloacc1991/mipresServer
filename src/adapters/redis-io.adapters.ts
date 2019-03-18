import { IoAdapter } from '@nestjs/websockets';
import * as redisIoAdapter from 'socket.io-redis';
import { Logger } from '@nestjs/common';
import { EventEmitter } from 'events';

const redisAdapter = redisIoAdapter({ host: 'localhost', port: 6379 });
const eventEmitter = EventEmitter;

export class RedisIoAdapter extends IoAdapter {
  createIOServer(port: number, options?: any): any {
    Logger.log('connecting to redis adapter...');
    const server = super.createIOServer(port);
    eventEmitter.defaultMaxListeners = 0;
    server.adapter(redisAdapter);
    return server;
  }
}

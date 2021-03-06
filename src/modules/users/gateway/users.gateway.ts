import { WebSocketGateway, OnGatewayConnection, WebSocketServer } from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { USERS_ACTIONS } from '../actions/users.actions';

@WebSocketGateway({
  namespace: '/user',
})
export class UsersGateway implements OnGatewayConnection {

  @WebSocketServer() private socket$;

  afterInit() {
    Logger.log('socket users initialized');
  }

  handleConnection(client) {
    Logger.log('client users connected');
  }

  handleDisconnect(client) {
    Logger.log('client users disconnected');
  }

  usersCreated(user: User) {
    Logger.log('PT-GATEWAY: users created');
    this.socket$.emit(USERS_ACTIONS.LIVE_CREATED, user);
  }

  usersUpdated(user: User) {
    Logger.log('PT-GATEWAY: users updated', JSON.stringify(user));
    this.socket$.emit(USERS_ACTIONS.LIVE_UPDATED, user);
  }

  usersDeleted(id: number) {
    Logger.log('PT-GATEWAY: users deleted', id.toString());
    this.socket$.emit(USERS_ACTIONS.LIVE_DELETED, id);
  }
}

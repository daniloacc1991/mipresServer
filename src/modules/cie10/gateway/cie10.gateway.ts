import { WebSocketGateway, OnGatewayConnection, WebSocketServer } from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { CIE10_ACTIONS } from '../actions/cie10.actions';
import { Cie10 } from '../entities/cie10.entity';

@WebSocketGateway({
  namespace: '/cie10',
})
export class Cie10Gateway implements OnGatewayConnection {

  @WebSocketServer() private socket$;

  afterInit() {
    Logger.log('socket cie10 initialized');
  }

  handleConnection(client) {
    Logger.log('client cie10 connected');
  }

  handleDisconnect(client) {
    Logger.log('client cie10 disconnected');
  }

  cie10Created(cie10: Cie10) {
    Logger.log('PT-GATEWAY: cie10 created');
    this.socket$.emit(CIE10_ACTIONS.LIVE_CREATED, cie10);
  }

  cie10Updated(cie10: Cie10) {
    Logger.log('PT-GATEWAY: cie10 updated', JSON.stringify(cie10));
    this.socket$.emit(CIE10_ACTIONS.LIVE_UPDATED, cie10);
  }

  cie10Deleted(id: number) {
    Logger.log('PT-GATEWAY: cie10 deleted', id.toString());
    this.socket$.emit(CIE10_ACTIONS.LIVE_DELETED, id);
  }
}

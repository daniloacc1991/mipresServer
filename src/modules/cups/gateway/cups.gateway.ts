import { WebSocketGateway, OnGatewayConnection, WebSocketServer } from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { CUPS_ACTIONS } from '../actions/cups.actions';
import { Cups } from '../entities/cups.entity';

@WebSocketGateway({
  namespace: '/cups',
})
export class CupsGateway implements OnGatewayConnection {
  @WebSocketServer() private socket$;

  afterInit() {
    Logger.log('socket cups initialized');
  }

  handleConnection(client) {
    Logger.log(client);
    Logger.log('client cups connected');
  }

  handleDisconnect(client) {
    Logger.log('client cups disconnected');
  }

  cupsCreated(cups: Cups) {
    Logger.log('PT-GATEWAY: cups created');
    this.socket$.emit(CUPS_ACTIONS.LIVE_CREATED, cups);
  }

  cupsUpdated(cups: Cups) {
    Logger.log('PT-GATEWAY: cups updated', JSON.stringify(cups));
    this.socket$.emit(CUPS_ACTIONS.LIVE_UPDATED, cups);
  }

  cupsDeleted(id: number) {
    Logger.log('PT-GATEWAY: cups deleted', id.toString());
    this.socket$.emit(CUPS_ACTIONS.LIVE_DELETED, id);
  }
}

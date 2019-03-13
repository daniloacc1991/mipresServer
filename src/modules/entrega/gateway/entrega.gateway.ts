import { WebSocketGateway, OnGatewayConnection, WebSocketServer } from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { Entrega } from '../entities/entrega.entity';
import { ENTREGA_ACTIONS } from '../actions/entrega.actions';

@WebSocketGateway()
export class EntregaGateway implements OnGatewayConnection {
  @WebSocketServer() private socket$;

  afterInit() {
    Logger.log('socket entrega initialized');
  }

  handleConnection(client) {
    Logger.log('client entrega connected');
  }

  handleDisconnect(client) {
    Logger.log('client entrega disconnected');
  }

  entregaCreated(entrega: Entrega) {
    Logger.log('PT-GATEWAY: entrega created');
    this.socket$.emit(ENTREGA_ACTIONS.LIVE_CREATED, entrega);
  }

  entregaUpdated(entrega: Entrega) {
    Logger.log('PT-GATEWAY: entrega updated', JSON.stringify(entrega));
    this.socket$.emit(ENTREGA_ACTIONS.LIVE_UPDATED, entrega);
  }

  entregaDeleted(id: number) {
    Logger.log('PT-GATEWAY: entrega deleted', id.toString());
    this.socket$.emit(ENTREGA_ACTIONS.LIVE_DELETED, id);
  }
}

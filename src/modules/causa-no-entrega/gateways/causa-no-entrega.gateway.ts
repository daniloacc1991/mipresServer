import { WebSocketGateway, OnGatewayConnection, OnGatewayDisconnect, WebSocketServer } from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { CausaNoEntrega } from '../entities/causa-no-entrega.entity';
import { CAUSA_NO_ENTREGA_ACTIONS } from '../actions/causa-no-entrega.actions';

@WebSocketGateway({
  namespace: '/causa-no-entrega',
})
export class CausaNoEntregaGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() private socket$;

  afterInit() {
    Logger.log('socket causaNoEntrega initialized');
  }

  handleConnection(client) {
    Logger.log('client causaNoEntrega connected');
  }

  handleDisconnect(client) {
    Logger.log('client causaNoEntrega disconnected');
  }

  causaNoEntregaCreated(causaNoEntrega: CausaNoEntrega) {
    Logger.log('PT-GATEWAY: causaNoEntrega created');
    this.socket$.emit(CAUSA_NO_ENTREGA_ACTIONS.LIVE_CREATED, causaNoEntrega);
  }

  causaNoEntregaUpdated(causaNoEntrega: CausaNoEntrega) {
    Logger.log('PT-GATEWAY: causaNoEntrega updated', JSON.stringify(causaNoEntrega));
    this.socket$.emit(CAUSA_NO_ENTREGA_ACTIONS.LIVE_UPDATED, causaNoEntrega);
  }

  causaNoEntregaDeleted(id: number) {
    Logger.log('PT-GATEWAY: causaNoEntrega deleted', id.toString());
    this.socket$.emit(CAUSA_NO_ENTREGA_ACTIONS.LIVE_DELETED, id);
  }
}

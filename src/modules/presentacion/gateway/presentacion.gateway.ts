import { WebSocketGateway, WebSocketServer, OnGatewayConnection } from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { Presentacion } from '../entities/presentacion.entity';
import { PRESENTACION_ACTIONS } from '../actions/presentacion.actions';

@WebSocketGateway({
  namespace: '/presentacion',
})
export class PresentacionGateway implements OnGatewayConnection {

  @WebSocketServer() private socket$;

  afterInit() {
    Logger.log('socket presentacion initialized');
  }

  handleConnection(client) {
    Logger.log(client);
    Logger.log('client presentacion connected');
  }

  handleDisconnect(client) {
    Logger.log('client presentacion disconnected');
  }

  presentacionCreated(presentacion: Presentacion) {
    Logger.log('PT-GATEWAY: presentacion created');
    this.socket$.emit(PRESENTACION_ACTIONS.LIVE_CREATED, presentacion);
  }

  presentacionUpdated(presentacion: Presentacion) {
    Logger.log('PT-GATEWAY: presentacion updated', JSON.stringify(presentacion));
    this.socket$.emit(PRESENTACION_ACTIONS.LIVE_UPDATED, presentacion);
  }

  presentacionDeleted(id: number) {
    Logger.log('PT-GATEWAY: presentacion deleted', id.toString());
    this.socket$.emit(PRESENTACION_ACTIONS.LIVE_DELETED, id);
  }
}

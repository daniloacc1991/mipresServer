import { WebSocketServer, WebSocketGateway, OnGatewayConnection } from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { FRECUENCIA_ACTIONS } from '../actions/frecuencia.actions';
import { Frecuencia } from '../entities/frecuencia';

@WebSocketGateway({
  namespace: '/frecuencia',
})
export class FrecuenciaGateway implements OnGatewayConnection {

  @WebSocketServer() private socket$;

  afterInit() {
    Logger.log('socket frecuencia initialized');
  }

  handleConnection(client) {
    Logger.log('client frecuencia connected');
  }

  handleDisconnect(client) {
    Logger.log('client frecuencia disconnected');
  }

  frecuenciaCreated(frecuencia: Frecuencia) {
    Logger.log('PT-GATEWAY: frecuencia created');
    this.socket$.emit(FRECUENCIA_ACTIONS.LIVE_CREATED, frecuencia);
  }

  frecuenciaUpdated(frecuencia: Frecuencia) {
    Logger.log('PT-GATEWAY: frecuencia updated', JSON.stringify(frecuencia));
    this.socket$.emit(FRECUENCIA_ACTIONS.LIVE_UPDATED, frecuencia);
  }

  frecuenciaDeleted(id: number) {
    Logger.log('PT-GATEWAY: frecuencia deleted', id.toString());
    this.socket$.emit(FRECUENCIA_ACTIONS.LIVE_DELETED, id);
  }
}

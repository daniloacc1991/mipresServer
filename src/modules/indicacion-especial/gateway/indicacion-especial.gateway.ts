import { WebSocketGateway, WebSocketServer, OnGatewayConnection } from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { INDICACION_ESPECIAL_ACTIONS } from '../actions/indicacion-especial.actions';
import { IndicacionEspecial } from '../entities/indicacion-especial';

@WebSocketGateway({
  namespace: '/indicacion-especial',
})
export class IndicacionEspecialGateway implements OnGatewayConnection {
  @WebSocketServer() private socket$;

  afterInit() {
    Logger.log('socket indicacionEspecial initialized');
  }

  handleConnection(client) {
    Logger.log('client indicacionEspecial connected');
  }

  handleDisconnect(client) {
    Logger.log('client indicacionEspecial disconnected');
  }

  indicacionEspecialCreated(indicacionEspecial: IndicacionEspecial) {
    Logger.log('PT-GATEWAY: indicacionEspecial created');
    this.socket$.emit(INDICACION_ESPECIAL_ACTIONS.LIVE_CREATED, indicacionEspecial);
  }

  indicacionEspecialUpdated(indicacionEspecial: IndicacionEspecial) {
    Logger.log('PT-GATEWAY: indicacionEspecial updated', JSON.stringify(indicacionEspecial));
    this.socket$.emit(INDICACION_ESPECIAL_ACTIONS.LIVE_UPDATED, indicacionEspecial);
  }

  indicacionEspecialDeleted(id: number) {
    Logger.log('PT-GATEWAY: indicacionEspecial deleted', id.toString());
    this.socket$.emit(INDICACION_ESPECIAL_ACTIONS.LIVE_DELETED, id);
  }
}

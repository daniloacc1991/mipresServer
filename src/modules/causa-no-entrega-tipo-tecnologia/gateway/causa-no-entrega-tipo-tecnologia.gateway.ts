import { WebSocketGateway, WebSocketServer, OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { CausaNoEntregaTipoTecnologia } from '../entites/causa-no-entrega-tipo-tecnologia.entity';
import { CAUSA_NO_ENTREGA_TIPO_TECNOLOGIA_ACTIONS } from '../actions/causa-no-entrega-tipo-tecnologia.actions';

@WebSocketGateway({
  namespace: '/causa-no-entrega-tipo-tecnologia',
})
export class CausaNoEntregaTipoTecnologiaGateway implements OnGatewayConnection, OnGatewayDisconnect {

  @WebSocketServer() private socket$;

  afterInit() {
    Logger.log('socket causaNoEntregaTipoTecnologia initialized');
  }

  handleConnection(client) {
    Logger.log('client causaNoEntregaTipoTecnologia connected');
  }

  handleDisconnect(client) {
    Logger.log('client causaNoEntregaTipoTecnologia disconnected');
  }

  causaNoEntregaTipoTecnologiaCreated(element: CausaNoEntregaTipoTecnologia) {
    Logger.log('PT-GATEWAY: causaNoEntregaTipoTecnologia created');
    this.socket$.emit(CAUSA_NO_ENTREGA_TIPO_TECNOLOGIA_ACTIONS.LIVE_CREATED, element);
  }

  causaNoEntregaTipoTecnologiaUpdated(element: CausaNoEntregaTipoTecnologia) {
    Logger.log('PT-GATEWAY: causaNoEntregaTipoTecnologia updated', JSON.stringify(element));
    this.socket$.emit(CAUSA_NO_ENTREGA_TIPO_TECNOLOGIA_ACTIONS.LIVE_UPDATED, element);
  }

  causaNoEntregaTipoTecnologiaDeleted(id: number) {
    Logger.log('PT-GATEWAY: causaNoEntregaTipoTecnologia deleted', id.toString());
    this.socket$.emit(CAUSA_NO_ENTREGA_TIPO_TECNOLOGIA_ACTIONS.LIVE_DELETED, id);
  }
}

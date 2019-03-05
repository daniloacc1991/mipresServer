import { WebSocketGateway, OnGatewayConnection, WebSocketServer } from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { UnidadMedidaDosis } from '../entities/unidad-medida-dosis';
import { UNIDAD_MEDIDA_DOSIS_ACTIONS } from '../actions/unidad-medida-dosis.actions';

@WebSocketGateway({
  namespace: '/unidad-medida-dosis',
})
export class UnidadMedidaDosisGateway implements OnGatewayConnection {

  @WebSocketServer() private socket$;

  afterInit() {
    Logger.log('socket unidad-medida-dosis initialized');
  }

  handleConnection(client) {
    Logger.log(client);
    Logger.log('client unidad-medida-dosis connected');
  }

  handleDisconnect(client) {
    Logger.log('client unidad-medida-dosis disconnected');
  }

  unidadMedidaDosisCreated(unidadMedidaDosis: UnidadMedidaDosis) {
    Logger.log('PT-GATEWAY: unidadMedidaDosis created');
    this.socket$.emit(UNIDAD_MEDIDA_DOSIS_ACTIONS.LIVE_CREATED, unidadMedidaDosis);
  }

  unidadMedidaDosisUpdated(unidadMedidaDosis: UnidadMedidaDosis) {
    Logger.log('PT-GATEWAY: unidadMedidaDosis updated', JSON.stringify(unidadMedidaDosis));
    this.socket$.emit(UNIDAD_MEDIDA_DOSIS_ACTIONS.LIVE_UPDATED, unidadMedidaDosis);
  }

  unidadMedidaDosisDeleted(id: number) {
    Logger.log('PT-GATEWAY: unidadMedidaDosis deleted', id.toString());
    this.socket$.emit(UNIDAD_MEDIDA_DOSIS_ACTIONS.LIVE_DELETED, id);
  }
}

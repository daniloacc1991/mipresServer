import { WebSocketGateway, WebSocketServer, OnGatewayConnection } from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { TipoProductoNutricional } from '../entities/tipo-producto-nutricional.entity';
import { TIPO_PRODUCTO_NUTRICIONAL_ACTIONS } from '../actions/tipo-producto-nutricional.actions';

@WebSocketGateway({
  namespace: '/tipo-producto-nutricional',
})
export class TipoProductoNutricionalGateway implements OnGatewayConnection {

  @WebSocketServer() private socket$;

  afterInit() {
    Logger.log('socket tipo-producto-nutricional initialized');
  }

  handleConnection(client) {
    Logger.log('client tipo-producto-nutricional connected');
  }

  handleDisconnect(client) {
    Logger.log('client tipo-producto-nutricional disconnected');
  }

  tipoProductoNutricionalCreated(tipoProductoNutricional: TipoProductoNutricional) {
    Logger.log('PT-GATEWAY: tipoProductoNutricional created');
    this.socket$.emit(TIPO_PRODUCTO_NUTRICIONAL_ACTIONS.LIVE_CREATED, tipoProductoNutricional);
  }

  tipoProductoNutricionalUpdated(tipoProductoNutricional: TipoProductoNutricional) {
    Logger.log('PT-GATEWAY: tipoProductoNutricional updated', JSON.stringify(tipoProductoNutricional));
    this.socket$.emit(TIPO_PRODUCTO_NUTRICIONAL_ACTIONS.LIVE_UPDATED, tipoProductoNutricional);
  }

  tipoProductoNutricionalDeleted(id: number) {
    Logger.log('PT-GATEWAY: tipoProductoNutricional deleted', id.toString());
    this.socket$.emit(TIPO_PRODUCTO_NUTRICIONAL_ACTIONS.LIVE_DELETED, id);
  }
}

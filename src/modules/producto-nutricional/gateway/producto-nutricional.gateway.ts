import { WebSocketGateway, OnGatewayConnection, OnGatewayDisconnect, WebSocketServer } from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { ProductoNutricional } from '../entities/producto-nutricional.entity';
import { PRODUCTO_NUTRICIONAL_ACTIONS } from '../actions/producto-nutricional.actions';

@WebSocketGateway()
export class ProductoNutricionalGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() private socket$;

  afterInit() {
    Logger.log('socket productoNutricional initialized');
  }

  handleConnection(client) {
    Logger.log('client productoNutricional connected');
  }

  handleDisconnect(client) {
    Logger.log('client productoNutricional disconnected');
  }

  productoNutricionalCreated(productoNutricional: ProductoNutricional) {
    Logger.log('PT-GATEWAY: productoNutricional created');
    this.socket$.emit(PRODUCTO_NUTRICIONAL_ACTIONS.LIVE_CREATED, productoNutricional);
  }

  productoNutricionalUpdated(productoNutricional: ProductoNutricional) {
    Logger.log('PT-GATEWAY: productoNutricional updated', JSON.stringify(productoNutricional));
    this.socket$.emit(PRODUCTO_NUTRICIONAL_ACTIONS.LIVE_UPDATED, productoNutricional);
  }

  productoNutricionalDeleted(id: number) {
    Logger.log('PT-GATEWAY: productoNutricional deleted', id.toString());
    this.socket$.emit(PRODUCTO_NUTRICIONAL_ACTIONS.LIVE_DELETED, id);
  }
}

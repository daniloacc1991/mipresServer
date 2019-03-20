import { WebSocketGateway, OnGatewayConnection, OnGatewayDisconnect, WebSocketServer } from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { ProductoNutricionalForma } from '../entities/producto-nutricional-forma.entity';
import { PRODUCTO_NUTRICIONAL_FORMA_ACTIONS } from '../actions/producto-nutricional-forma.actions';

@WebSocketGateway({
  namespace: '/producto-nutricional-forma',
})
export class ProductoNutricionalFormaGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() private socket$;

  afterInit() {
    Logger.log('socket productoNutricionalForma initialized');
  }

  handleConnection(client) {
    Logger.log('client productoNutricionalForma connected');
  }

  handleDisconnect(client) {
    Logger.log('client productoNutricionalForma disconnected');
  }

  productoNutricionalFormaCreated(productoNutricionalForma: ProductoNutricionalForma) {
    Logger.log('PT-GATEWAY: productoNutricionalForma created');
    this.socket$.emit(PRODUCTO_NUTRICIONAL_FORMA_ACTIONS.LIVE_CREATED, productoNutricionalForma);
  }

  productoNutricionalFormaUpdated(productoNutricionalForma: ProductoNutricionalForma) {
    Logger.log('PT-GATEWAY: productoNutricionalForma updated', JSON.stringify(productoNutricionalForma));
    this.socket$.emit(PRODUCTO_NUTRICIONAL_FORMA_ACTIONS.LIVE_UPDATED, productoNutricionalForma);
  }

  productoNutricionalFormaDeleted(id: number) {
    Logger.log('PT-GATEWAY: productoNutricionalForma deleted', id.toString());
    this.socket$.emit(PRODUCTO_NUTRICIONAL_FORMA_ACTIONS.LIVE_DELETED, id);
  }
}

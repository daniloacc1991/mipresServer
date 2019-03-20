import { WebSocketGateway, OnGatewayConnection, OnGatewayDisconnect, WebSocketServer } from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { ProductoNutricionalViaAdmin } from '../entities/producto-nutricional-via-admin.entity';
import { PRODUCTO_NUTRICIONAL_VIA_ADMIN_ACTIONS } from '../actions/producto-nutricional-via-admin.actions';

@WebSocketGateway({
  namespace: '/producto-nutricional-via-admin',
})
export class ProductoNutricionalViaAdminGateway implements OnGatewayConnection, OnGatewayDisconnect {

  @WebSocketServer() private socket$;

  afterInit() {
    Logger.log('socket productoNutricionalViaAdmin initialized');
  }

  handleConnection(client) {
    Logger.log('client productoNutricionalViaAdmin connected');
  }

  handleDisconnect(client) {
    Logger.log('client productoNutricionalViaAdmin disconnected');
  }

  productoNutricionalViaAdminCreated(productoNutricionalViaAdmin: ProductoNutricionalViaAdmin) {
    Logger.log('PT-GATEWAY: productoNutricionalViaAdmin created');
    this.socket$.emit(PRODUCTO_NUTRICIONAL_VIA_ADMIN_ACTIONS.LIVE_CREATED, productoNutricionalViaAdmin);
  }

  productoNutricionalViaAdminUpdated(productoNutricionalViaAdmin: ProductoNutricionalViaAdmin) {
    Logger.log('PT-GATEWAY: productoNutricionalViaAdmin updated', JSON.stringify(productoNutricionalViaAdmin));
    this.socket$.emit(PRODUCTO_NUTRICIONAL_VIA_ADMIN_ACTIONS.LIVE_UPDATED, productoNutricionalViaAdmin);
  }

  productoNutricionalViaAdminDeleted(id: number) {
    Logger.log('PT-GATEWAY: productoNutricionalViaAdmin deleted', id.toString());
    this.socket$.emit(PRODUCTO_NUTRICIONAL_VIA_ADMIN_ACTIONS.LIVE_DELETED, id);
  }
}

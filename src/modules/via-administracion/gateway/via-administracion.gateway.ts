import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { ViaAdministracion } from '../entities/via-administracion.entity';
import { VIA_ADMINISTRACION_ACTIONS } from '../actions/via-administracion.actions';

@WebSocketGateway({
  namespace: '/via-administracion',
})
export class ViaAdministracionGateway {
  @WebSocketServer() private socket$;

  afterInit() {
    Logger.log('socket via administracion initialized');
  }

  handleConnection(client) {
    Logger.log('client via administracion connected');
  }

  handleDisconnect(client) {
    Logger.log('client via administracion disconnected');
  }

  viaAdministracionCreated(viaAdministracion: ViaAdministracion) {
    Logger.log('PT-GATEWAY: viaAdministracion created');
    this.socket$.emit(VIA_ADMINISTRACION_ACTIONS.LIVE_CREATED, viaAdministracion);
  }

  viaAdministracionUpdated(viaAdministracion: ViaAdministracion) {
    Logger.log('PT-GATEWAY: viaAdministracion updated', JSON.stringify(viaAdministracion));
    this.socket$.emit(VIA_ADMINISTRACION_ACTIONS.LIVE_UPDATED, viaAdministracion);
  }

  viaAdministracionDeleted(id: number) {
    Logger.log('PT-GATEWAY: viaAdministracion deleted', id.toString());
    this.socket$.emit(VIA_ADMINISTRACION_ACTIONS.LIVE_DELETED, id);
  }
}

import { WebSocketGateway, OnGatewayConnection, WebSocketServer } from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { Municipio } from '../entities/municipio';
import { MUNICIPIOS_ACTIONS } from '../actions/municipio.actions';

@WebSocketGateway({
  namespace: '/municipio',
})
export class MunicipioGateway implements OnGatewayConnection {
  @WebSocketServer() private socket$;

  afterInit() {
    Logger.log('socket municipio initialized');
  }

  handleConnection(client) {
    Logger.log(client);
    Logger.log('client municipio connected');
  }

  handleDisconnect(client) {
    Logger.log('client municipio disconnected');
  }

  municipioCreated(municipio: Municipio) {
    Logger.log('PT-GATEWAY: municipio created');
    this.socket$.emit(MUNICIPIOS_ACTIONS.LIVE_CREATED, municipio);
  }

  municipioUpdated(municipio: Municipio) {
    Logger.log('PT-GATEWAY: municipio updated', JSON.stringify(municipio));
    this.socket$.emit(MUNICIPIOS_ACTIONS.LIVE_UPDATED, municipio);
  }

  municipioDeleted(id: number) {
    Logger.log('PT-GATEWAY: municipio deleted', id.toString());
    this.socket$.emit(MUNICIPIOS_ACTIONS.LIVE_DELETED, id);
  }
}

import { WebSocketGateway, OnGatewayConnection, WebSocketServer } from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { FormaFarmaceutica } from '../entities/forma-farmaceutica';
import { FORMAS_FARMACEUTICAS_ACTIONS } from '../actions/forma-farmaceutica.actions';

@WebSocketGateway({
  namespace: 'forma-farmaceutica',
})
export class FormaFarmaceuticaGateway implements OnGatewayConnection {

  @WebSocketServer() private socket$;

  afterInit() {
    Logger.log('socket forma-farmaceutica initialized');
  }

  handleConnection(client) {
    Logger.log(client);
    Logger.log('client forma-farmaceutica connected');
  }

  handleDisconnect(client) {
    Logger.log('client forma-farmaceutica disconnected');
  }

  formaFarmaceuticaCreated(formaFarmaceutica: FormaFarmaceutica) {
    Logger.log('PT-GATEWAY: formaFarmaceutica created');
    this.socket$.emit(FORMAS_FARMACEUTICAS_ACTIONS.LIVE_CREATED, formaFarmaceutica);
  }

  formaFarmaceuticaUpdated(formaFarmaceutica: FormaFarmaceutica) {
    Logger.log('PT-GATEWAY: formaFarmaceutica updated', JSON.stringify(formaFarmaceutica));
    this.socket$.emit(FORMAS_FARMACEUTICAS_ACTIONS.LIVE_UPDATED, formaFarmaceutica);
  }

  formaFarmaceuticaDeleted(id: number) {
    Logger.log('PT-GATEWAY: formaFarmaceutica deleted', id.toString());
    this.socket$.emit(FORMAS_FARMACEUTICAS_ACTIONS.LIVE_DELETED, id);
  }
}

import { WebSocketGateway, OnGatewayConnection, WebSocketServer } from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { AmbitoAtencion } from '../entities/ambito-atencion.entity';
import { AMBITOS_ATENCION_ACTIONS } from '../actions/ambito-atencion.actions';

@WebSocketGateway({
  namespace: '/ambito-atencion',
})
export class AmbitoAtencionGateway implements OnGatewayConnection {

  @WebSocketServer() private socket$;

  afterInit() {
    Logger.log('socket ambito-atencion initialized');
  }

  handleConnection(client) {
    Logger.log(client);
    Logger.log('client ambito-atencion connected');
  }

  handleDisconnect(client) {
    Logger.log('client ambito-atencion disconnected');
  }

  ambitoAtencionCreated(ambitoAtencion: AmbitoAtencion) {
    Logger.log('PT-GATEWAY: ambitoAtencion created');
    this.socket$.emit(AMBITOS_ATENCION_ACTIONS.LIVE_CREATED, ambitoAtencion);
  }

  ambitoAtencionUpdated(ambitoAtencion: AmbitoAtencion) {
    Logger.log('PT-GATEWAY: ambitoAtencion updated', JSON.stringify(ambitoAtencion));
    this.socket$.emit(AMBITOS_ATENCION_ACTIONS.LIVE_UPDATED, ambitoAtencion);
  }

  ambitoAtencionDeleted(id: number) {
    Logger.log('PT-GATEWAY: ambitoAtencion deleted', id.toString());
    this.socket$.emit(AMBITOS_ATENCION_ACTIONS.LIVE_DELETED, id);
  }
}

import { WebSocketGateway, OnGatewayConnection, WebSocketServer } from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { PrescripcionEncabezado } from '../entities/prescripcion-encabezado.entity';
import { PRESCRIPCIONS_ACTIONS } from '../actions/prescripcion-encabezado.actions';

@WebSocketGateway({
  namespace: '/prescripcion-encabezado',
})
export class PrescripcionEncabezadoGateway implements OnGatewayConnection {

  @WebSocketServer() private socket$;

  afterInit() {
    Logger.log('socket initialized');
  }

  handleConnection(client) {
    Logger.log('client connected');
  }

  handleDisconnect(client) {
    Logger.log('client disconnected');
  }

  prescripcionCreated(prescripcion: PrescripcionEncabezado) {
    Logger.log('PT-GATEWAY: prescripcion created');
    this.socket$.emit(PRESCRIPCIONS_ACTIONS.LIVE_CREATED, prescripcion);
  }

  prescripcionUpdated(prescripcion: PrescripcionEncabezado) {
    Logger.log('PT-GATEWAY: contact updated', JSON.stringify(prescripcion));
    this.socket$.emit(PRESCRIPCIONS_ACTIONS.LIVE_UPDATED, prescripcion);
  }

  prescripcionDeleted(id: number) {
    Logger.log('PT-GATEWAY: contact deleted', id.toString());
    this.socket$.emit(PRESCRIPCIONS_ACTIONS.LIVE_DELETED, id);
  }
}

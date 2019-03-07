import { WebSocketGateway, OnGatewayConnection, WebSocketServer } from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { PrescripcionEncabezado } from '../entities/prescripcion-encabezado.entity';
import { PRESCRIPCIONS_ENCABEZADO_ACTIONS } from '../actions/prescripcion-encabezado.actions';

@WebSocketGateway({
  namespace: '/prescripcion-encabezado',
})
export class PrescripcionEncabezadoGateway implements OnGatewayConnection {

  @WebSocketServer() private socket$;

  afterInit() {
    Logger.log('socket prescripcion-encabezado initialized');
  }

  handleConnection(client) {
    Logger.log('client prescripcion-encabezado connected');
  }

  handleDisconnect(client) {
    Logger.log('client prescripcion-encabezado disconnected');
  }

  prescripcionCreated(prescripcion: PrescripcionEncabezado) {
    Logger.log('PT-GATEWAY: prescripcion-encabezado created');
    this.socket$.emit(PRESCRIPCIONS_ENCABEZADO_ACTIONS.LIVE_CREATED, prescripcion);
  }

  prescripcionUpdated(prescripcion: PrescripcionEncabezado) {
    Logger.log('PT-GATEWAY: prescripcion-encabezado updated', JSON.stringify(prescripcion));
    this.socket$.emit(PRESCRIPCIONS_ENCABEZADO_ACTIONS.LIVE_UPDATED, prescripcion);
  }

  prescripcionDeleted(id: number) {
    Logger.log('PT-GATEWAY: prescripcion-encabezado deleted', id.toString());
    this.socket$.emit(PRESCRIPCIONS_ENCABEZADO_ACTIONS.LIVE_DELETED, id);
  }
}

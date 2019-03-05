import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { PrescripcionDetalle } from '../entities/prescripcion-detalle.entity';
import { PRESCRIPCIONS_DETALLE_ACTIONS } from '../actions/prescripcion-detalle.actions';

@WebSocketGateway({
  namespace: '/prescripcion-detalle',
})
export class PrescripcionDetalleGateway {

  @WebSocketServer() private socket$;

  afterInit() {
    Logger.log('socket prescripcion-detalle initialized');
  }

  handleConnection(client) {
    Logger.log(client);
    Logger.log('client prescripcion-detalle connected');
  }

  handleDisconnect(client) {
    Logger.log('client prescripcion-detalle disconnected');
  }

  prescripcionDetalleCreated(prescripcionDetalle: PrescripcionDetalle) {
    Logger.log('PT-GATEWAY: prescripcionDetalle created');
    this.socket$.emit(PRESCRIPCIONS_DETALLE_ACTIONS.LIVE_CREATED, prescripcionDetalle);
  }

  prescripcionDetalleUpdated(prescripcionDetalle: PrescripcionDetalle) {
    Logger.log('PT-GATEWAY: prescripcionDetalle updated', JSON.stringify(prescripcionDetalle));
    this.socket$.emit(PRESCRIPCIONS_DETALLE_ACTIONS.LIVE_UPDATED, prescripcionDetalle);
  }

  prescripcionDetalleDeleted(id: number) {
    Logger.log('PT-GATEWAY: prescripcionDetalle deleted', id.toString());
    this.socket$.emit(PRESCRIPCIONS_DETALLE_ACTIONS.LIVE_DELETED, id);
  }
}

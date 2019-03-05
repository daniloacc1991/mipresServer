import { WebSocketGateway, OnGatewayConnection, WebSocketServer } from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { TipoDispositivoMedico } from '../entities/tipo-dispositivo-medico';
import { TIPO_DISPOSITIVO_MEDICOS_ACTIONS } from '../actions/tipo-dispositivo-medico.actions';

@WebSocketGateway({
  namespace: '/tipo-dispositivo-medico',
})
export class TipoDispositivoMedicoGateway implements OnGatewayConnection {

  @WebSocketServer() private socket$;

  afterInit() {
    Logger.log('socket tipo-dispositivo-medico initialized');
  }

  handleConnection(client) {
    Logger.log(client);
    Logger.log('client tipo-dispositivo-medico connected');
  }

  handleDisconnect(client) {
    Logger.log('client tipo-dispositivo-medico disconnected');
  }

  tipoDispositivoMedicoCreated(tipoDispositivoMedico: TipoDispositivoMedico) {
    Logger.log('PT-GATEWAY: tipoDispositivoMedico created');
    this.socket$.emit(TIPO_DISPOSITIVO_MEDICOS_ACTIONS.LIVE_CREATED, tipoDispositivoMedico);
  }

  tipoDispositivoMedicoUpdated(tipoDispositivoMedico: TipoDispositivoMedico) {
    Logger.log('PT-GATEWAY: tipoDispositivoMedico updated', JSON.stringify(tipoDispositivoMedico));
    this.socket$.emit(TIPO_DISPOSITIVO_MEDICOS_ACTIONS.LIVE_UPDATED, tipoDispositivoMedico);
  }

  tipoDispositivoMedicoDeleted(id: number) {
    Logger.log('PT-GATEWAY: tipoDispositivoMedico deleted', id.toString());
    this.socket$.emit(TIPO_DISPOSITIVO_MEDICOS_ACTIONS.LIVE_DELETED, id);
  }
}
